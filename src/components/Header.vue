<template>
  <v-container class="hero-section pt-0">
    <v-row class="d-flex align-center justify-center header-desc">
      <v-col cols="12" lg="5" sm="6" >
        <v-sheet elevation="0" class="pa-5">
          <div class="d-flex align-center ">
            <div cols="12">
              <h1 class="text-sm uppercase mb-4"> Welcome to my world</h1>
              <h2 class=" text-4xl xs:text-2xl mb-6 font-medium" >
                {{ $t("title[0]") }} 
              
                <span class="marked  ">{{ $t("name") }}</span>
                <br/>
                {{ $t("title[1]") }}
                
              </h2>
              <p class="text-l mb-5">
                {{ $t("quickDescription") }}
              </p>
              <!-- <h1 class="text-xl  mb-5 ">
                {{ $t("title[0]") }}
                <span class="marked   text-4xl">{{ $t("name") }}</span>
                {{ $t("title[1]") }}
              </h1>
              <p class="text-l mb-5">
                {{ $t("quickDescription") }}
              </p> -->

              <div class="d-flex align-center gap-4 mt-9">
                <SocialLink url="https://github.com/adelekekismath" icon="mdi-github" />
                <SocialLink url="https://www.linkedin.com/in/kismath-adeleke-a014a81bb/" icon="mdi-linkedin" />
                <SocialLink url="mailto:adelekekismath9@gmail.com" icon="mdi-email" />
                <SocialLink url="#" icon="mdi-text-account" @click="downloadResume()" :isLink="false" />
              </div>

            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" lg="7" sm="6">
        <v-sheet>
          <!-- Lottie animation -->
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_thiu5nbr.json" background="transparent"
            speed="1" loop autoplay>
          </lottie-player>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SocialLink from './SocialLink';

export default {
  name: "Header",
  components: {
    SocialLink,
  },
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
