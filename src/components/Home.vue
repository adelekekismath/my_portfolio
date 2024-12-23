<template>
   
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
