<template>
  <v-container class="hero-section pt-0">
    <v-row class="d-flex align-center justify-center header-desc">
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
                <v-chip color="#6C55F9"  variant="elevated" >
                    <v-icon left class="mr-1">mdi-circle</v-icon>
                    <div class="text-l max-w-xs]" >
                        {{ $t("availableForHire") }}
                    </div>
                </v-chip>
              </div>

              <div class="d-flex align-center gap-1 mt-4">
                <SocialLink url="https://github.com/adelekekismath" icon="mdi-github" />
                <SocialLink url="https://www.linkedin.com/in/kismath-adeleke-a014a81bb/" icon="mdi-linkedin" />
                <SocialLink url="mailto:adelekekismath9@gmail.com" icon="mdi-email" />
                <SocialLink url="#" icon="mdi-text-account" @click="downloadResume()" :isLink="false" />
              </div>

            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" lg="7" sm="6" class="">
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

.availability-indicator {
  display: flex;
  align-items: center;
}


.header-desc {
  margin-top: -50px;
}

@media (max-width: 375px) {
  .hero-section {
    
  }
}
</style>
