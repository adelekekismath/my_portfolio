<template>
  <div class="bg-indigo-50 page-section pt-5 mb-0" :class="{ 'space-on-top': addSpaceOnTop }">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_qhrndegx.json" background="transparent"
              speed="1" style="max-width: 500px; max-height: 500px" autoplay></lottie-player>
          </div>
        </div>
        <div class="col-lg-6 p-4">
          <h2 class="title-section text-2xl" v-html="$t('allaboutMe.title')"></h2>
          <div class="divider"></div>

          <div>
            <p v-html="$t('allaboutMe.intro')"></p>
          </div>

          <div class="allaboutMe-me">
            <ul>
              <li class="my-4">
                <i class="fa-solid fa-check-double marked mr-2"></i>
                <span v-html="$t('allaboutMe.details[0]')"></span>
              </li>
              <li class="my-4">
                <i class="fa-solid fa-check-double marked mr-2"></i>
                <span v-html="$t('allaboutMe.details[1]')"></span>
              </li>
              <li class="my-4">
                <i class="fa-solid fa-check-double marked mr-2"></i>
                <span v-html="$t('allaboutMe.details[2]')"></span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  </div>

  <div class=" page-section">

      <Skills :independentSkills="independentSkills" :companySkills="companySkills" />

      <Education />

      <Career />

     

  </div>
</template>

<script>
import Skills from './Skills';
import Education from './Education';
import Career from './Career';
export default {
  data() {
    return {
      scrollPosition: 0,
      independentSkills: [
        "https://img.shields.io/badge/VueJS-439A97?style=flat&logo=Vue.js&logoColor=white",
        "https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black",
        "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=black",
        "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white",
        "https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=Tailwind-CSS&logoColor=white",
      ],
      companySkills: [
        "https://img.shields.io/badge/VueJS-439A97?style=flat&logo=Vue.js&logoColor=white",
        "https://img.shields.io/badge/NodeJS-339933?style=flat&logo=Node.js&logoColor=white",
        "https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black",
        "https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=white",
        "https://img.shields.io/badge/flask-000000?style=flat&logo=flask&logoColor=white",
        "https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white",
        "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white",
        "https://img.shields.io/badge/REST_API-000000?style=flat&logo=REST&logoColor=white",
        "https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white",
        "https://img.shields.io/badge/Vuetify-1867C0?style=flat&logo=Vuetify&logoColor=white",
        "https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white",
        "https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=Ubuntu&logoColor=white",
        "https://img.shields.io/badge/Gitlab-FCA121?style=flat&logo=Gitlab&logoColor=white",
        "https://img.shields.io/badge/Bitbucket-0052CC?style=flat&logo=Bitbucket&logoColor=white",
        "https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=Jenkins&logoColor=white",
        

      ]
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

  components: {
    Skills,
    Education,
    Career
  }
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
