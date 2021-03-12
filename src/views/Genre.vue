<template>
  <div class="container mx-auto">
    <div class="my-10 w-full">
      <h1 class="text-gray-600 font-semibold text-3xl mb-10 md:mb-0 ml-2 md:ml-0">
        {{ genre.name }} Movies
      </h1>
      <div class="flex flex-wrap w-full mt-5">
        <router-link
          :to="'/movie/' + movie.id"
          class="w-full md:w-1/5 px-2 mb-10 flex md:flex-wrap text-left items-center"
          v-for="movie in movies"
          :key="movie.id"
        >
          <img
            :src="IMAGE_PATH + movie.poster_path"
            class="h-44 md:h-96 w-auto md:w-full rounded-md mr-10 md:mr-0"
          />
          <div>
            <p class="text-gray-800 font-bold text-xl mt-2">{{ movie.original_title }}</p>
            <p class="mt-2">
              <i class="fas fa-star text-yellow-500"></i> {{ movie.vote_average }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { IMAGE_PATH } from "../config";
import { mapState } from "vuex";
export default {
  name: "Genre",
  mounted() {
    this.load();
  },
  data() {
    return {
      IMAGE_PATH,
      movies: [],
    };
  },
  watch: {
    "$route.params.name": function () {
      this.load();
    },
  },
  computed: {
    ...mapState({
      genre: "genre",
    }),
  },
  methods: {
    load() {
      axios
        .get(
          process.env.VUE_APP_API_URI +
            "discover/movie?api_key=" +
            process.env.VUE_APP_API_KEY +
            "&with_genres=" +
            this.genre.id
        )
        .then((res) => {
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
