<template>
  <form @submit.prevent="submit" class="c-form">
    <b-field grouped>
      <v-field
        v-model="form.username"
        :form="form"
        field="username"
        placeholder="Username"
        expanded
      ></v-field>
      <v-field
        type="password"
        v-model="form.password"
        :form="form"
        field="password1"
        placeholder="Password"
        expanded
      ></v-field>
      <b-field expanded>
        <p class="control">
          <button
            class="button is-rounded is-primary is-small c-btn"
            type="submit"
          >
            {{ $t("login", this.lang) }}
          </button>
        </p>
      </b-field>
      <b-field expanded>
        <router-link
          class="button is-rounded is-danger is-small c-btn"
          to="/signup"
        >
          <strong>{{ $t("signup", this.lang) }}</strong>
        </router-link>
      </b-field>
    </b-field>
  </form>
</template>

<script>
import Form from "@/resources/form";
import VField from "@/components/VField.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: new Form(
        {
          username: "",
          password: ""
        },
        this.$store,
        "Successfully logged in"
      )
    };
  },
  methods: {
    submit() {
      this.form
        .submit("auth/login")
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {});
    }
  },
  computed: {
    ...mapGetters({
      lang: "lang"
    })
  },
  components: { VField }
};
</script>

<style scoped>
.c-login {
  width: 95%;
}
.c-form {
  text-align: right;
  padding-right: 7% !important;
}
.c-column {
  padding: 0 !important;
  margin: 0 !important;
}
.c-btn {
  height: 36px !important;
}
</style>
