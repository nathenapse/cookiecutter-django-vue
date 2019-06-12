<template>
  <div id="app">
    <Snackbar
      :time="5000"
      :message="snackbar.message"
      :status="snackbar.status"
      v-if="snackbar.value"
    />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Snackbar from "@/components/Snackbar";
export default {
  components: { Snackbar },
  computed: {
    ...mapGetters({
      snackbar: "snackbar"
    })
  },
  created() {
    // this.$store.commit('wallet/SET_WALLET', 1000)
  }
};
</script>

<style scoped></style>
