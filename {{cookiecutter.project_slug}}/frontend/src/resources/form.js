import Errors from "./errors";
import { NotificationProgrammatic as Notification } from "buefy/dist/components/notification";

const messageTypes = {
  error: "is-danger",
  success: "is-success",
  warning: "is-warning"
};
class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor(
    data,
    store,
    message = "Successfuly Submitted",
    type = "success"
  ) {
    this.originalData = data;
    this.loading = false;
    this.showMessage = false;
    this.message = message;
    this.type = type;
    this.$store = store;
    this.errors = new Errors();
    for (let field in data) {
      this[field] = data[field];
    }
  }

  /**
   * Fetch all relevant data for the form.
   */
  data() {
    let data = {};

    for (let property in this.originalData) {
      data[property] = this[property];
    }

    return data;
  }

  /**
   * Reset the form fields.
   */
  reset() {
    for (let field in this.originalData) {
      this[field] = "";
    }

    this.errors.clear();
  }

  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit(action) {
    let vm = this;
    this.loading = true;
    return new Promise((resolve, reject) => {
      vm.$store
        .dispatch(action, vm.data())
        .then(response => {
          vm.onSuccess(response);
          resolve(response.results.data);
        })
        .catch(error => {
          vm.onFail(error);
          reject(error);
        });
    });
  }

  /**
   * Handle a successful form submission.
   */
  onSuccess() {
    this.loading = false;
    this.showMessage = true;
    this.reset();
    Notification.open({
      message: this.message,
      type: messageTypes.success,
      duration: 3000
    });
    console.log(this.message);
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail(errors) {
    this.loading = false;
    let error;
    if (errors && errors.non_field_errors) {
      error = errors.non_field_errors[0];
    } else {
      error =
        "Something went wrong!! Please check your Internet and Try Again!";
    }
    Notification.open({
      message: error,
      type: messageTypes.error,
      duration: 3000
    });
    this.errors.record(errors);
  }
}

export default Form;
