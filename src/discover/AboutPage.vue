<template>
   
<div class="my-[76px]">
    <About :addSpaceOnTop="true" />
    <Personnality />
</div>
  

</template>

<script>
import Navbar from "../components/Navbar";
import About from "../components/About";
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
    NavbarFooter,
    Personnality
  },
};
</script>

<style></style>
