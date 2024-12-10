<template>
  <Navbar />
    <div
      class="page-section bg-green-50 pt-10 space-on-top">
      <div class="container">
        <div class="row my-5 card-blog-row">

          <div
            v-for="(a, i) in project"
            :key="a"
            class="col-md-5 col-lg-4 py-5 px-4 my-8">
            <div
              class="flex flex-col space-y-5 border shadow-md border-green-500 bg-white h-96 rounded-md hover:-mt-1 hover:shadow-lg hover:shadow-green-200 cursor-pointer">
              <div
                class="flex items-center justify-center -mt-6 h-48 rounded-t-lg ">
                <img class="h-48 w-96 project-img " :src="project[i].image" />
              </div>

              <div class="flex flex-col ml-4">
                <div class="text-xl font-medium text-green-600 ml-3 mb-2">
                  <a>{{ project[i].name }}</a>
                </div>
                <div
                  class="text-base h-18 lg:h-12 text-gray-700 ml-3 mr-3 mb-2">
                  {{ project[i].content }}
                </div>

                <div
                  class="flex flex-row items-start py-2 px-2 space-x-3 ml-2"
                  style="padding-bottom: 25px">
                  <img :src="project[i].tech1" />
                  <img :src="project[i].tech2" />
                  <img :src="project[i].tech3" />
                </div>
              </div>
              <div class="my-4 ml-5" >
              <a
                :href="project[i].live"
                target="_blank"
                class="btn  hover:bg-green-100  hover:font-medium">
                Live
                <span class="mai-chevron-forward text-sm"></span>
              </a>

              <a
                :href="project[i].code"
                target="_blank"
                class="btn hover:bg-purple-100 hover:font-medium">
                Source Code
                <span class="mai-chevron-forward text-sm"></span>
              </a>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <Footer />

</template>

<script>
import ProjectData from "../data/projects.js";

import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default {
  name: "Project Page",
  data() {
    return {
      project: ProjectData,
    };
  },

  props: {
    blog: Array,
  },

  components: { Navbar, Services, Footer },
};
</script>

<style scoped>

.space-on-top {
  top: 70px;
}

.project-img{
  border: 3px solid #dad9db;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px #6C55F9;
}

</style>
