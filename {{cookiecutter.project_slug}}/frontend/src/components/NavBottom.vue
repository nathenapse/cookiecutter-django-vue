<template>
  <nav
    class="c-nav-bot navbar is-spaced is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container main-nav">
      <div
        id="navbarmenu"
        class="navbar-menu"
        :class="active ? 'is-active' : ''"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <span class="subtitle has-text-white is-7 c-subtitle"
              >language:</span
            >
            <select class="c-select" v-model="ln" @change="setLang(ln)">
              <option
                v-for="lang in langs"
                :key="lang.lang"
                :value="lang.lang"
                >{{ lang.text }}</option
              >
            </select>
          </div>

          <div class="navbar-item">
            <span class="subtitle has-text-white is-7 c-subtitle"
              >10:21:16 UTC+3</span
            >
          </div>

          <div class="navbar-item">
            <span class="subtitle has-text-white is-7 c-subtitle"
              >Mon 15 Apr 2019</span
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      active: false,
      ln: "",
      langs: [{ lang: "en", text: "EN" }, { lang: "am", text: "AM" }]
    };
  },
  props: {
    color: {
      type: String,
      default: "is-white"
    }
  },
  computed: {
    ...mapGetters(["lang"]),

    getLang() {
      if (this.lang) {
        return this.lang;
      }
      return this.$i18n.locale;
    }
  },
  methods: {
    click() {
      this.active = !this.active;
    },
    setLang(lang) {
      this.$store.dispatch("setLang", { vm: this, lang });
    }
  },
  created() {
    if (this.$store.getters.lang != "") {
      this.ln = this.$store.getters.lang;
    } else {
      this.ln = "am";
    }
  }
};
</script>

<style>
.c-nav-bot {
  background: #2b2b2b !important;
  min-height: 20px !important;
  height: 42px;
}
#navbarmenu {
  height: 28px;
}
.c-subtitle {
  margin-bottom: 0px !important;
  margin-right: 1em;
  margin-left: 1em;
}
.c-select {
  margin-right: 1em;
}
.main-nav {
  min-width: 93%;
}
</style>
