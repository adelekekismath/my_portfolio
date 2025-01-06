<template>
  <v-container class="hero-section pt-0">
    <v-row class="d-flex align-center justify-center header-desc sm:mt-10 md:mt-[100px] !mb-[100px]">
      <v-col cols="12" lg="5" sm="6" >
        <v-sheet elevation="0" class="pa-5">
          <div class="d-flex align-center ">
            <div cols="12">
              <h1 class="text-sm uppercase mb-4"> {{ $t('welcome') }}</h1>
              <h2 class="xs:text-3xl sm:text-4xl  mb-6 font-medium" >
                {{ $t("title[0]") }} 

                <span class="marked  ">{{ $t("name") }}</span>
                <br/>
                {{ $t("title[1]") }}
                
              </h2>
              <p class="text-l mb-5">
                {{ $t("quickDescription") }}
              </p>

              <div class="availability-indicator mb-5">
                    <v-icon left class="mr-1 marked border-blink">mdi-circle</v-icon>
                    <div class="text-l max-w-xs] marked" >
                        {{ $t("availableForHire") }}
                    </div>
              </div>

              <div class="d-flex align-center gap-1 mt-4">
                <SocialLink url="https://github.com/adelekekismath" icon="mdi-github" />
                <SocialLink url="https://www.linkedin.com/in/kismath-adeleke-a014a81bb/" icon="mdi-linkedin" />
                <SocialLink url="mailto:adelekekismath9@gmail.com" icon="mdi-email" />
              </div>

              <v-btn class="mt-5 text-none" color="#6C55F9" dark @click="downloadResume()">
                {{ $t("downloadResume") }}
                </v-btn>

            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" lg="7" sm="6" class="">
        <v-sheet class=" md:mb-0 mb-10">
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
import { defineAsyncComponent } from 'vue';
import "@lottiefiles/lottie-player";
const SocialLink = defineAsyncComponent(() => import('./SocialLink.vue'));

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
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 80px;
}

.availability-indicator {
  display: flex;
  align-items: center;
}




@media screen and (max-width: 600px) {
  .header-desc {
    margin-top: -50px;
  }
  .hero-section {
    margin-top: 20px;
  }
    
}
.border-blink {
    border-radius: 49%;
    animation: blink 1s infinite;
}

@keyframes blink { 
    0% { box-shadow: 0 0 10px 1px #6C55F9; }
    50% { box-shadow: none; }
    100% { box-shadow: 0 0 10px 1px #6C55F9; }
}






</style>
