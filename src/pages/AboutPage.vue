<template>
   
<div class="md:mt-[76px] sm:mt-0 mb-[100px]">
    <About :addSpaceOnTop="true" />
    <Personnality />
</div>
  

</template>

<script>
import Navbar from "../components/Navbar";
import About from "../components/About";
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
    Personnality
  },
};
</script>

<style></style>
