<template>
  <div
    class="lg:hidden fixed bottom-0 hidden-on-medium left-0 z-20 pb-2 w-full rounded-t-xl drop-shadow-xl px-1 bg-gray-50 border-t border-gray-200  dark:bg-gray-800 dark:border-gray-600">
    <div>
      <div
        class="flex flex-wrap items-center justify-evenly nav-item p-1 space-x-5 text-sm  sm:mt-0">
        <router-link
          v-for="menuItem in menuItems"
          :key="menuItem.title"
          :to="menuItem.path"
          class="flex flex-col items-center mb-3 justify-center"
          active-class="active-nav-item">
          <div
            class="flex items-center hover:no-underline mt-1  rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700"
            aria-current="page">
            <i class="mdi mobile marked" :class="menuItem.icon"></i>
          </div>
          <div
            class="flex items-center justify-center mt-1  hover:no-underline font-medium rounded-lg dark:text-white dark:hover:bg-gray-700"
            aria-current="page">
            <p class="">{{ menuItem.title }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavbarFooter',
  props: {
    blog: Array,
  },
  data() {
    return {
      menuItems: [
          { title: this.$t('home'), path: '/', icon: 'mdi-home' },
          { title: this.$t('projects'), path: '/projects', icon: 'mdi-view-grid-plus' },
          { title: this.$t('about'), path: '/about', icon: 'mdi-star' },
          { title: this.$t('blog'), path: '/blog', icon: 'mdi-newspaper' },
          { title: this.$t('contact'), path: '/contact', icon: 'mdi-email' },
     ],
    };
  },
};
</script>

<style scoped>


</style>
