<template>
  <div>
    <bb-hero class="login" :header="$t('signup')">
      <form @submit.prevent="submit">
        <v-field
          v-model="form.username"
          :form="form"
          field="username"
          required
          placeholder="Username"
        ></v-field>
        <v-field
          v-model="form.email"
          :form="form"
          field="email"
          required
          placeholder="Email"
        ></v-field>
        <v-field
          v-model="form.first_name"
          :form="form"
          field="first_name"
          placeholder="First Name"
        ></v-field>
        <v-field
          v-model="form.last_name"
          :form="form"
          field="last_name"
          placeholder="Last Name"
        ></v-field>
        <v-field
          type="password"
          v-model="form.password1"
          :form="form"
          field="password1"
          placeholder="Password"
        ></v-field>
        <v-field
          type="password"
          v-model="form.password2"
          :form="form"
          field="password2"
          placeholder="Confirm Password"
        ></v-field>
        <button type="submit" class="button c-background is-fullwidth">
          Signup
        </button>
      </form>
      <div class="columns">
        <div class="column">
          <router-link to="/login">
            I have an account
            <strong>Login</strong>
          </router-link>
        </div>
      </div>
    </bb-hero>
  </div>
</template>

<script>
import bbHero from "../components/Hero";
import VField from "@/components/VField.vue";
import Form from "@/resources/form";

export default {
  data() {
    return {
      form: new Form(
        {
          username: "",
          email: "",
          password1: "",
          password2: "",
          first_name: "",
          last_name: "",
        },
        this.$store,
        "Successfully Registered, Please Verify your Phone"
      ),
    };
  },
  methods: {
    submit() {
      let vm = this;
      vm.form
        .submit("auth/register")
        .catch(() => {});
    },
    usernameChanged() {
      this.form.phone = this.form.username;
    },
  },
  components: { bbHero, VField },
};
</script>

<style></style>
