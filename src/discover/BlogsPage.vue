<template>
   

  <div class="b pt-8 page-section md:mt-[76px] mb-[130px] md:mb-[72px]">
    <div class="container">
      <div class="my-2 grid sm:grid-cols-2 md:grid-cols-2 gap-4">

        <div v-for="(a, i) in blog" :key="a" class="my-2 p-4 pb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" :src="blog[i].image" alt="" />
            </a>
            <div class="py-5">
                <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t(`${blog[i].title}`) }}</h5>
                </a>
                <p class="mb-3  text-gray-700 dark:text-gray-400">{{ $t(`${blog[i].intro}`) }}</p>
                <a :href="blog[i].link" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Data from "../data/data.js";

export default {
  name: "Blog Page",
  data() {
    return {
      blog: Data,
    };
  }
};
</script>

<style scoped>
.space-on-top {
  top: 60px;
}
</style>
