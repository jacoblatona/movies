<template>
  <div class="container mx-auto">
    <div class="my-10 w-full">
      <h1 class="text-gray-600 font-semibold text-3xl">
        Results for {{ this.$route.params.criteria }}
      </h1>
      <div class="flex flex-wrap w-full mt-5" v-if="movies">
        <router-link
          :to="'/movie/' + movie.id"
          class="w-100 md:w-1/5 px-2 mb-10"
          v-for="movie in movies"
          :key="movie.id"
        >
          <img :src="IMAGE_PATH + movie.poster_path" class="h-92 w-full rounded-md" />
          <p class="text-gray-800 font-bold text-xl mt-2">{{ movie.original_title }}</p>
          <p class="mt-2">
            <i class="fas fa-star text-yellow-500"></i> {{ movie.vote_average }}
          </p>
          <div class="w-full flex justify-between"></div>
        </router-link>
      </div>
      <div class="mt-5" v-else>
        <p class="text-gray-500">No Results Found</p>
      </div>
    </div>
  </div>
</template>

<script>
import { API, API_KEY, IMAGE_PATH } from "../config";
export default {
  name: "Search",
  mounted() {
    this.load();
  },
  data() {
    return {
      movies: [],
      IMAGE_PATH,
    };
  },
  watch: {
    "$route.params.criteria": function () {
      this.load();
    },
  },
  methods: {
    load() {
      API.get("search/movie" + API_KEY + "&query=" + this.$route.params.criteria)
        .then((res) => {
          console.log(res.data.results);
          this.movies = res.data.results;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
