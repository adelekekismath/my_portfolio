<template>
    <Header />
    <!-- <About />
    <Contact :addSpace="false" /> -->
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue';
  
  // Utiliser des composants asynchrones pour améliorer les performances
  const Header = defineAsyncComponent(() => import('./Header.vue'));
//   const About = defineAsyncComponent(() => import('./About.vue'));
//   const Contact = defineAsyncComponent(() => import('./Contact.vue'));
  
  export default {
    name: 'Home',
    props: {
      blog: Array,
    },
    components: {
      Header,
    //   About,
    //   Contact
    }
  };
  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>