<template>
  <header>
    <div class="page-banner home-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 py-3 wow fadeInUp">
            <p
              class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug">
              HI, I'm Kismath 
              <br />
              Full-stack Developer
            </p>
            <p
              class="hidden lg:block text-2xl mb-5">
              Here, I present my varied and complex projects, 
              demonstrating my versatility, rigor and ability to create captivating user experiences.
            </p>

            <router-link
              to="/about"
              name="fade"
              class="btn btn-outline border text-secondary">
              About
            </router-link>
            <a
              href="#"
              class="btn btn-success btn-split ml-2">
              Resume
              <div class="fab"><span class="mai-play"></span></div>
            </a>
          </div>
          <div class="col-lg-6 wow zoomIn">
            <div
              class="m-3 lg:m-3 p-1 lg:p-5">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_thiu5nbr.json"
                background="transparent"
                speed="2"
                autoplay></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { directive as motion } from "@vueuse/motion";

export default {};
</script>

<style></style>
