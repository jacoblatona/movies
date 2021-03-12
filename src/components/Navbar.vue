<template>
  <div>
    <div class="w-full py-5 px-10 bg-green-500 text-center text-white font-semibold">
      Vue.js + TailwindCSS
    </div>
    <nav class="bg-white py-5 px-5 md:px-0 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="font-bold text-xl text-gray-600"
          >CODE SAMPLE</router-link
        >
        <div class="hidden md:block">
          <router-link
            to="/"
            class="font-semibold text-gray-600 mr-7"
            :class="{
              'text-green-500 border-b-4 border-green-500 pb-7': $route.path == '/',
            }"
            >Popular</router-link
          >
          <router-link
            to="/top-rated"
            class="font-semibold text-gray-600 mr-7"
            :class="{
              'text-green-500 border-b-4 border-green-500 pb-7':
                $route.path == '/top-rated',
            }"
            >Top Rated</router-link
          >
          <router-link
            to="/upcoming"
            class="font-semibold text-gray-600 mr-7"
            :class="{
              'text-green-500 border-b-4 border-green-500 pb-7':
                $route.path == '/upcoming',
            }"
            >Upcoming</router-link
          >
          <div class="relative inline-block text-left" @click="show = !show">
            <div>
              <button
                type="button"
                class="inline-flex justify-center w-full bg-white font-semibold text-gray-600 focus:outline-none"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Genres
              </button>
            </div>

            <div
              class="origin-top-right absolute left-0 mt-7 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              v-show="show"
            >
              <div class="py-1" role="none">
                <span
                  @click="updateGenre(genre)"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                  role="menuitem"
                  v-for="genre in genres"
                  :key="genre.id"
                  >{{ genre.name }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-full bg-gray-100 invisible md:visible">
          <input
            class="rounded-l-full w-full px-6 text-gray-700 leading-tight bg-gray-100 focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
            autocomplete="off"
            v-model="criteria"
          />

          <div>
            <router-link
              :to="'/search/' + criteria"
              class="rounded-full focus:outline-none w-12 h-10 flex items-center justify-center"
            >
              <i class="fas fa-search" v-show="criteria"></i>
            </router-link>
          </div>
        </div>
        <span class="block md:hidden">
          <i class="fas fa-bars"></i>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Navbar",
  created() {},
  data() {
    return {
      show: false,
      criteria: "",
      IMAGE_PATH: process.env.VUE_APP_IMAGE_PATH,
    };
  },
  props: {},
  methods: {
    ...mapMutations({
      mutateGenre: "MUTATE_SINGLE_GENRE",
    }),
    updateGenre(genre) {
      this.mutateGenre({ id: genre.id, name: genre.name });
      this.$router.push("/genre/" + genre.name);
    },
  },
  computed: {
    ...mapGetters({
      genres: "GET_GENRES",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
