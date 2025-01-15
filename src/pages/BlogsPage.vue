<template>
    <div class="b pt-8 page-section md:mt-[76px] mb-[130px] md:mb-[72px]">
        <div class="container">
            <div class="my-2 grid sm:grid-cols-2 md:grid-cols-2 gap-4">

                <div v-for="(a, i) in blog" :key="a"
                    class="relative my-2 p-4 pb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" :src="blog[i].image" alt="" />
                    </a>
                    <div class="py-5">
                        <a href="#">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                                $t(`${blog[i].title}`) }}</h5>
                        </a>
                        <p class="mb-10  text-gray-700 dark:text-gray-400">{{ $t(`${blog[i].intro}`) }}</p>
                        <a :href="blog[i].link" target="_blank"
                            class="absolute bottom-3 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-blue-800">
                            <span> {{ $t("blogs.readMore") }}</span>
                            <span class="mdi mdi-arrow-right-thin mt-1 mdi-24px"></span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { blogData } from '@/data/data';

export default {
    name: "Blog Page",
    data() {
        return {
            blog: blogData
        };
    }
};
</script>

<style scoped>
.space-on-top {
    top: 60px;
}
</style>
