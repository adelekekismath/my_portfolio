<template class="bg-indigo-50">
   
  <Header />
  <About />
  <Contact :addSpace="false"/>
  
  <NavbarFooter />
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";
import NavbarFooter from "./NavbarFooter.vue";

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
    Contact,
    NavbarFooter,
  },
};
</script>

<style></style>
