<template>
  <div>
    <bb-hero class="login" header="Login">
      <form @submit.prevent="submit">
        <v-field
          v-model="form.username"
          :form="form"
          size="Small"
          field="username"
          placeholder="Username"
        ></v-field>
        <v-field
          type="password"
          v-model="form.password"
          :form="form"
          size="is-medium"
          field="password1"
          placeholder="Password"
        ></v-field>
        <button
          type="submit"
          class="button c-background is-fullwidth is-medium"
        >
          Login
        </button>
      </form>
      <div class="columns">
        <div class="column">
          <router-link to="/forgot">forgot password</router-link>
        </div>
        <div class="column">
          <router-link to="/signup">
            Don't have account?
            <strong>Signup</strong>
          </router-link>
        </div>
      </div>
    </bb-hero>
  </div>
</template>

<script>
import Form from "@/resources/form";
import bbHero from "../components/Hero";
import VField from "@/components/VField.vue";

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
  components: { bbHero, VField }
};
</script>

<style>
.login {
  background-color: #3b3b3b !important;
}
.c-background {
  background-color: #e7ac1e !important;
  color: white !important;
}
.c-background:hover {
  color: rgba(0, 0, 0, 0.8) !important;
}
</style>
