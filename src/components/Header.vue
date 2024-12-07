<template>
  <v-container class="hero-section pt-0">
    <v-row class="d-flex align-center justify-center header-desc">
      <v-col cols="12" lg="5"  sm="6">
        <v-sheet elevation="0" class="pa-5">
          <div class="d-flex align-center ">
            <div cols="12">
              <h1 class="text-2xl font-medium mb-5 marked">
                {{ $t("title") }}
              </h1>
              <p class="text-l mb-5">
                {{ $t("quickDescription") }}
              </p>

              <div class="mt-8">
                <router-link to="/about" class="btn btn-primary pa-2">
                  {{ $t("aboutMe") }}</router-link
                >
                <router-link
                  to="#"
                  @click="downloadResume()"
                  class="btn btn-outline ml-2 bg-success pa-2"
                >
                  {{ $t("myResume") }}<v-icon right>mdi-play</v-icon></router-link
                >
              </div>

            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" lg="7" sm="6">
        <v-sheet>
          <!-- Lottie animation -->
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_thiu5nbr.json"
            background="transparent"
            speed="2"
            loop
            autoplay
          >
          </lottie-player>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  methods: {
    downloadResume() {
      const resumeUrl = require("@/assets/resume.pdf");
      window.open(resumeUrl.default, "_blank");
    },
  },
};
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
}


.header-desc {
  margin-top: -100px;
}

@media (max-width: 375px) {
  .hero-section {
    top: 30px;
  }
}
</style>
