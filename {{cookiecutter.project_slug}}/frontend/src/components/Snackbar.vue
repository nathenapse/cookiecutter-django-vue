<template>
  <div
    class="snackbar success"
    :class="{ error: status == 'error' }"
    v-if="snackbar"
  >
    <div class="columns c-columns is-mobile">
      <div class="column is-10">
        <p>
          <span
            class="fa fa-check-circle"
            :class="{ 'fa-exclamation-triangle': status == 'error' }"
          ></span>
          {{ message }}
        </p>
      </div>
      <div class="column is-2">
        <button @click="close" class="c-btn">
          <span class="fa fa-times"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      snackbar: true
    };
  },
  props: {
    time: {},
    message: {},
    status: {}
  },
  created() {
    setTimeout(() => {
      this.snackbar = false;
      this.$store.commit("SET_SNACKBAR", {
        status: "",
        message: "",
        value: false
      });
    }, this.time);
  },
  methods: {
    close() {
      this.snackbar = false;
      this.$store.commit("SET_SNACKBAR", {
        status: "",
        message: "",
        value: false
      });
    }
  }
};
</script>

<style>
.snackbar {
  position: fixed;
  width: 46%;
  z-index: 100;
  left: 50%;
  transform: translate(-50%);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.c-columns {
  margin: 0 !important;
  padding: 0 !important;
}
.snackbar div {
  padding-left: 4%;
  padding-top: 2%;
  padding-right: 4%;
  color: white;
}
.success {
  background-color: rgb(87, 129, 20) !important;
}
.error {
  background-color: #e0284e !important;
}
.c-btn {
  background: transparent;
  border: 0;
}
@media (max-width: 768px) {
  .snackbar {
    width: 100%;
  }
}
</style>
