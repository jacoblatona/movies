<template>
  <div>
    <div class="container mx-auto pt-0 md:pt-20">
      <div
        class="py-20 bg-green-500 flex flex-wrap md:flex-nowrap justify-between items-center px-5 rounded-none md:rounded-xl"
      >
        <div class="text-center md:text-left">
          <h1 class="text-white font-bold text-4xl">BROWSE THE TOP MOVIES WITH EASE</h1>
          <h3 class="text-gray-200 font-semibold text-xl mt-3">
            Using the TMDb API you can find the best movies out right now!
          </h3>
        </div>
        <img src="/images/avengers.png" class="h-0 md:h-96 -mt-20" />
      </div>
      <div class="my-10 w-full">
        <h1 class="text-gray-600 font-semibold text-3xl mb-10 md:mb-0 ml-3 md:ml-0">
          Popular Movies
        </h1>
        <div class="flex flex-wrap w-full mt-5">
          <router-link
            :to="'/movie/' + movie.id"
            class="w-full md:w-1/5 px-2 mb-10 flex md:flex-wrap items-center text-left"
            v-for="movie in movies"
            :key="movie.id"
          >
            <img
              :src="IMAGE_PATH + movie.poster_path"
              class="h-44 md:h-96 w-auto md:w-full rounded-md mr-10 md:mr-0"
            />
            <div>
              <p class="text-gray-800 font-bold text-xl mt-2">
                {{ movie.original_title }}
              </p>
              <p class="mt-2">
                <i class="fas fa-star text-yellow-500"></i> {{ movie.vote_average }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_PATH } from "../config";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      IMAGE_PATH,
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      movies: "GET_POPULAR",
    }),
  },
};
</script>
