class Errors {
  /**
   * Create a new Errors instance.
   */
  constructor() {
    this.errors = {};
  }

  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   */
  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  /**
   * Determine if we have any errors.
   */
  any() {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  get(field) {
    let error = this.inErrors(field);
    if (error) {
      return error;
    }
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  inErrors(field) {
    return field.split(".").reduce(function(o, k) {
      return (o || {})[k];
    }, this.errors);
  }
  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record(errors) {
    this.errors = errors;
  }

  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear(field) {
    if (field) {
      let splited = field.split(".");
      if (splited.length === 2) {
        delete this.errors[splited[0]][splited[1]];
        return;
      }
      delete this.errors[field];
      return;
    }

    this.errors = {};
  }
}

export default Errors;
