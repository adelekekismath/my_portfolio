<template>
   

  <About :addSpaceOnTop="true" />

  <Personnality />

  <NavbarFooter :blog="blog" />
</template>

<script>
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import NavbarFooter from "../components/NavbarFooter";
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
    NavbarFooter,
    Personnality
  },
};
</script>

<style></style>
