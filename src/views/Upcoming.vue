<template>
  <div class="container mx-auto">
    <div class="my-10 w-full">
      <h1 class="text-gray-600 font-semibold text-3xl mb-10 md:mb-0 ml-2 md:ml-0">
        Upcoming Movies
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
import { mapGetters } from "vuex";

export default {
  name: "Upcoming",
  created() {},
  data() {
    return {
      IMAGE_PATH: process.env.VUE_APP_IMAGE_PATH,
    };
  },
  computed: {
    ...mapGetters({
      movies: "GET_UPCOMING",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
