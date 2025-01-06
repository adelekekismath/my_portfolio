<template>
    <Header />
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue';
  
  const Header = defineAsyncComponent(() => import('./Header.vue'));
  
  export default {
    name: 'Home',
    props: {
      blog: Array,
    },
    components: {
      Header,
    }
  };
  </script>