<template>
  <div class="container mx-auto py-10">
    <div
      class="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center text-center md:text-left"
    >
      <img
        :src="IMAGE_PATH + movie.poster_path"
        class="w-72 md:w-96 rounded-lg mr-0 md:mr-10 mb-10 md:mb-0"
      />
      <div>
        <h1 class="m-0 font-medium text-5xl mb-5">{{ movie.original_title }}</h1>
        <hr class="mb-5" />
        <p class="text-md text-gray-600 mb-2">Duration: {{ movie.runtime }} Minutes</p>
        <p class="text-,d text-gray-600 mb-10">Released: {{ movie.release_date }}</p>
        <p class="text-lg text-gray-500 mb-20">{{ movie.overview }}</p>
        <a
          :href="movie.homepage"
          class="px-8 py-4 bg-blue-500 rounded-full text-white font-bold text-md"
          >Website <i class="fas fa-angle-right ml-3"></i
        ></a>
      </div>
    </div>
    <div class="w-full mt-10">
      <h1 class="text-gray-600 font-semibold text-3xl mb-10 md:mb-0 ml-2 md:ml-0">
        Related Movies
      </h1>
      <div class="flex flex-wrap w-full mt-5">
        <router-link
          :to="'/movie/' + rel.id"
          class="w-full md:w-1/5 px-2 mb-10 flex md:flex-wrap text-left items-center"
          v-for="rel in related"
          :key="rel.id"
        >
          <img
            :src="IMAGE_PATH + rel.poster_path"
            class="h-44 md:h-96 w-auto md:w-full rounded-md mr-10 md:mr-0"
          />
          <div>
            <p class="text-gray-800 font-bold text-xl mt-2">{{ rel.original_title }}</p>
            <p class="mt-2">
              <i class="fas fa-star text-yellow-500"></i> {{ rel.vote_average }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { API, API_KEY, IMAGE_PATH } from "../config";
export default {
  name: "Movie",
  mounted() {
    this.loadMovie();
    this.loadRelated();
  },
  data() {
    return {
      movie: {},
      related: [],
      IMAGE_PATH,
    };
  },
  watch: {
    "$route.params.id": function () {
      this.loadMovie();
      this.loadRelated();
      window.scrollTo(0, 0);
    },
  },
  methods: {
    loadMovie() {
      API.get("movie/" + this.$route.params.id + API_KEY)
        .then((res) => {
          this.movie = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    loadRelated() {
      API.get("movie/" + this.$route.params.id + "/similar" + API_KEY)
        .then((res) => {
          this.related = res.data.results;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
