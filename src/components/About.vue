<template>
  <div class="bg-green-50 page-section pt-5 -mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_Ugmwktgw7h.json" background="transparent"
              speed="0.5" style="max-width: 500px; max-height: 500px" loop autoplay>
            </lottie-player>
          </div>
        </div>

        <div class="col-lg-6 p-4">
          <h2 class="title-section text-2xl">
            All About
            <span class="marked">Myself</span>
          </h2>
          <div class="divider"></div>

          <div>
            <p>
              I’m a Junior Front-End Developer located in Fresnes,France . I
              have a serious passion for UI effects,animations and creating
              intuitive, dynamic user experiences.
            </p>
          </div>

          <div>
            <p>
              I'm a well organized person, problem solver, independent employee
              with high attention to detail. Fan of Fitness and Boxing, outdoor
              activities with my friends, TV series and English literature.
            </p>
          </div>

          <div>
            <p class="hidden lg:flex">
              And I'm interested in the entire creative frontend spectrum and
              working on ambitious projects with positive people.
            </p>
          </div>

          <div class="img-place mb-3"></div>
          <a href="#" class="btn btn-primary">More Details</a>
          <a href="#" class="btn btn-outline border ml-2">Success Stories</a>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
  <!-- .page-section -->

  <div class="bg-green-50 page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 p-4 -mt-9 lg:mt-0">
          <h2 class="title-section text-2xl">
            My
            <span class="marked">Skills & Experiences</span>
          </h2>
          <div class="divider"></div>
          <p class="mb-4">
            I 'm a student of Sorbonne University in the master Computer
            Engineering. My experiences in school gave me strong communication
            and networking skills, which are crucial for event planning.
          </p>
          <p class="mb-4">
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and simple web
            apps,features, animations, and coding interactive.
          </p>

          <p class="mb-5 hidden lg:flex"></p>
          <router-link to="/projects" class="btn btn-outline ml-2">
            My Projects
          </router-link>
        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center">
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_kecnUFs0ZZ.json" background="transparent"
              speed="0.5" style="max-width: 550px; max-height: 550px" loop autoplay></lottie-player>
          </div>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },
};
</script>

<style></style>
