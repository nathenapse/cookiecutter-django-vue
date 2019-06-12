<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item title" :to="{ name: 'dashboard' }">
          Bedamena
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="active ? 'is-active' : ''"
          @click="click"
        >
          <span aria-hidden="true"></span> <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="active ? 'is-active' : ''"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">
              <avatar username="nathan"></avatar>
            </a>
            <div class="navbar-dropdown is-boxed is-right">
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Account
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item" @click="logout"> Logout </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    click() {
      this.active = !this.active;
    },
    logout() {
      this.$store.dispatch("LOGOUT");
      this.$router.push({ name: "home" });
    }
  },
  components: { Avatar }
};
</script>

<style></style>
