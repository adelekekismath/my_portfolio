<template>
   

  <About :addSpaceOnTop="true" />

  <Personnality />

  <Footer :blog="blog" />
</template>

<script>
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Personnality from "../components/Personnality";

export default {
  name: "About Page",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    About,
    Services,
    Footer,
    Personnality
  },
};
</script>

<style></style>
