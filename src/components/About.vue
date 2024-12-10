<template>
  <div class="bg-green-50 page-section pt-5 -mb-5" :class="{ 'space-on-top': addSpaceOnTop}" >
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_qhrndegx.json"
              background="transparent"
              speed="1"
              style="max-width: 500px; max-height: 500px"
              autoplay></lottie-player>
          </div>
        </div>
        <div class="col-lg-6 p-4">
          <h2 class="title-section text-2xl" v-html="$t('allaboutMe.title')"></h2>
          <div class="divider"></div>

          <div>
            <p v-html="$t('allaboutMe.intro')"></p>
          </div>

          <div class="allaboutMe-me">
            <p v-html="$t('allaboutMe.details[0]')"></p>
            <p v-html="$t('allaboutMe.details[1]')"></p>
          </div>

          <div>
            <p class="hidden lg:flex" v-html="$t('allaboutMe.details[2]')"></p>
          </div>
        </div>
       
        </div>
      </div>
    </div>
    <!-- .container -->

  <!-- .page-section -->

  <div class="bg-green-50 page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 p-4 -mt-9 lg:mt-0">
          <h2 class="title-section text-2xl" v-html="$t('skillsAndExperience.title')" ></h2>
          <div class="divider"></div>
          <div class="mb-4" v-html="$t('skillsAndExperience.description')"></div>
          <router-link to="/blog" class="btn btn-primary">My Blogs</router-link>
          <router-link to="/projects" class="btn btn-outline ml-2">
            My Projects
          </router-link>
        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center">
            <lottie-player
              src="https://lottie.host/0634f73c-13ea-45c0-ba69-411f0a58f2b0/7HePBzo9CW.json"
              background="transparent"
              speed="0.5"
              style="max-width: 500px; max-height: 500px"
              autoplay></lottie-player>
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

  props: {
    addSpaceOnTop: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    skillsAndExperienceDescription() {
      const description = this.$t('skillsAndExperience.description');
      console.log(description);
      return Array.isArray(description) ? description : [];
    }
  },

  methods: {
    handleScroll(e) {
      this.scrollPosition = e.target.scrollTop;

      if (this.scrollPosition > 100) {
        console.log("UP");
      } else {
        console.log("DOWN");
      }
    },
  },
};
</script>

<style scoped>

.about-me i {
  color: #645F88;
  margin-inline: 0.5rem;
}

.space-on-top {
  top: 60px;
}


</style>
