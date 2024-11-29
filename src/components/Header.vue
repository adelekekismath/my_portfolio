<template>
 <v-container class="hero-section">
  <v-row class="align-center justify-center header-desc">
    <v-col cols="12" lg="6"  sm="6">
      <v-sheet elevation="0" class="pa-10">
        <v-row class="d-flex align-center header-desc">
          <v-col cols="12">
            <h1 class=" text-2xl lg:text-4xl font-medium  mb-5 marked">
              {{ $t('title') }}
            </h1>
            <p class="text-xl mb-5">
              {{ $t('quickDescription') }}
            </p>

            <v-btn outlined color="secondary" to="/about">
              {{ $t('aboutMe') }}
            </v-btn>

            <v-btn class="ml-2" color="success" href="#">
              {{ $t('myResume') }}
              <v-icon right>mdi-play</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>

    <v-col cols="12" lg="6" sm="6">
      <v-sheet width="100%">
        <!-- Lottie animation -->
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_thiu5nbr.json"
          background="transparent"
          speed="2"
          autoplay>
        </lottie-player>
        
      </v-sheet>
    </v-col>
  </v-row>
</v-container>

</template>

<script>

export default {};
</script>

<style scoped>
  .hero-section {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>
