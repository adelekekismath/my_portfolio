<template>
  <Navbar />
  <Header />
  <Services />
  <About />

  <div class="bg-green-50 py-5 page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="text-2xl mb-3">Personality as Developer</div>
        <h3 class="title-section">
          <span>"Self-learning, Teamwork and Consistency</span>
          Win The Rase"
        </h3>
        <div class="divider mx-auto"></div>
      </div>
    </div>
  </div>
  
  <Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import Services from "./Services.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import Footer from "./Footer.vue";

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
    Services,
    About,
    Projects,
    Contact,
    Footer,
  },
};
</script>

<style></style>
