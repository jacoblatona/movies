<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar,
  },
  created() {
    this.loadPopular();
    this.loadUpcoming();
    this.loadTopRated();
    this.loadGenres();
  },
  methods: {
    ...mapActions({
      loadPopular: "LOAD_POPULAR",
      loadUpcoming: "LOAD_UPCOMING",
      loadTopRated: "LOAD_TOP_RATED",
      loadGenres: "LOAD_GENRES",
    }),
  },
};
</script>
<style lang="scss"></style>
