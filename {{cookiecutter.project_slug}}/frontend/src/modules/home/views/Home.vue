<template>
  <div class="home">
    <section class="home hero is-info is-fullheight">
      <div class="hero-head"><bd-nav color="is-white"></bd-nav></div>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column">
              <h1 class="title">Title</h1>
              <h2 class="subtitle">Subtitle</h2>
            </div>
            <div class="card column">
              <header class="card-header">
                <p
                  class="card-header-title is-centered has-text-primary is-size-3 "
                >
                  Signup
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  <b-field>
                    <b-input placeholder="Name" v-model="name"></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      placeholder="Username"
                      v-model="username"
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-input placeholder="Email" v-model="email"></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      placeholder="Password"
                      v-model="password"
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      placeholder="Confirm Password"
                      v-model="confirm_password"
                    ></b-input>
                  </b-field>
                  <button type="submit" class="button is-primary is-fullwidth">
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-small-padding is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Clients</h1>
          <h2 class="subtitle">Medium subtitle</h2>
        </div>
      </div>
    </section>
    <section class="hero is-small-padding is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Services</h1>
          <div class="columns">
            <div class="column">first service</div>
            <div class="column">second service</div>
            <div class="column">third service</div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Get Started now</h1>
          <h2 class="subtitle">Primary subtitle</h2>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import bdNav from "@/components/Nav.vue";

export default {
  name: "home",
  components: { bdNav },
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: ""
    };
  }
};
</script>
