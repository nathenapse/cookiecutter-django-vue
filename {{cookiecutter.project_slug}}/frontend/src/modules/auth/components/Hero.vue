<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered c-container">
        <h1 class="title">
          <router-link class="has-text-white is-size-1" :to="pageHeaderTo">
            <img src="../../../assets/images/logo.png" width="250" alt />
          </router-link>
        </h1>
        <div class="columns">
          <div class="card column is-half is-offset-one-quarter">
            <header class="card-header">
              <p class="card-header-title is-centered is-size-3 c-color">
                {{ header }}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageHeader: {
      type: String,
      default: "Gemet Bet"
    },
    pageHeaderTo: {
      type: String,
      default: "/"
    },
    header: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.c-color {
  color: #e7ac1e !important;
}
.c-container {
  max-width: 100% !important;
}
</style>
