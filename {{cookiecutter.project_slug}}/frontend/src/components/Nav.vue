<template>
  <nav
    class="navbar is-spaced is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/images/logo.png" width="112" height="28" />
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarmenu"
          :class="active ? 'is-active' : ''"
          @click="click"
        >
          <span color="is-white" aria-hidden="true"></span>
          <span aria-hidden="true"></span> <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarmenu"
        class="navbar-menu"
        :class="active ? 'is-active' : ''"
      >
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <!-- <a class="navbar-link"> Products </a> -->

            <div class="navbar-dropdown is-primary">
              <!-- <a class="navbar-item"> Droplets </a> -->
            </div>
          </div>

          <!-- <router-link class="navbar-item" to="/pricing"> Pricing </router-link> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link
                class="button is-outlined"
                :class="color"
                to="/login"
              >
                Log in
              </router-link>
              <router-link
                class="button is-outlined"
                :class="color"
                to="/signup"
              >
                <strong>Sign up</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  props: {
    color: {
      type: String,
      default: "is-white"
    }
  },
  methods: {
    click() {
      this.active = !this.active;
    }
  }
};
</script>

<style></style>
