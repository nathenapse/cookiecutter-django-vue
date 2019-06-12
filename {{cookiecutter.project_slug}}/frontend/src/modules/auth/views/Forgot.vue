<template>
  <div>
    <bb-hero class="login" header="Reset Password">
      <form @submit.prevent="submit">
        <v-field
          v-model="form.email"
          :form="form"
          field="email"
          placeholder="Email"
        ></v-field>
        <button
          type="submit"
          class="button c-background is-fullwidth is-medium"
        >
          Reset
        </button>
      </form>
      <div class="columns">
        <div class="column">
          <router-link to="/login">
            Go Back to
            <strong>Login</strong>
          </router-link>
        </div>
      </div>
    </bb-hero>
  </div>
</template>

<script>
import bbHero from "../components/Hero";
import Form from "@/resources/form";
import VField from "@/components/VField.vue";

export default {
  data() {
    return {
      form: new Form(
        {
          email: ""
        },
        this.$store,
        "Successfully sent reset password"
      )
    };
  },
  methods: {
    submit() {
      this.form.submit("auth/forgot").then(() => {
        this.$router.push({ name: "home" });
      });
    }
  },
  components: { bbHero, VField }
};
</script>

<style></style>
