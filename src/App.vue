<template>
  <v-app>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Blog from './data/data.js'
import Footer from './components/Footer';

export default {
  name: 'App',
  data () {
    return {
      blog: Blog,
    }
  },

  methods: {
    beforeEnter () {
      this.$root.$emit('scrollBeforeEnter')
    }
  },

  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 350ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style>
