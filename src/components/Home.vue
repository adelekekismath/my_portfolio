<template class="bg-indigo-50">
   
  <Header />
  <About />
  <Contact :addSpace="false"/>
  
  
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";

export default {
  name: "Home",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    Header,
    About,
    Contact
  },
};
</script>

<style></style>
