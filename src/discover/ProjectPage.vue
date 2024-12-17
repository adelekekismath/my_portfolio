<template>
   
    <div
      class="page-section bg-indigo-50 space-on-top">
      <div class="container">
        <div class="row my-5 card-blog-row">

          <div
            v-for="(a, i) in project"
            :key="a"
            class="col-md-5 col-lg-4 py-5 px-4 my-8">
            <div
              class="flex flex-col space-y-5 border shadow-md border-indigo-500 bg-white h-105 rounded-md hover:-mt-1 hover:shadow-lg hover:shadow-indigo-400 cursor-pointer">
              <div
                class="flex items-center justify-center -mt-6 h-48 rounded-t-lg bg-white ">
                <img class="h-48 w-96 project-img " :src="project[i].image" />
              </div>

              <div class="flex flex-col ml-4">
                <div class="text-xl font-medium  ml-3 mb-2">
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
                class="btn  hover:bg-indigo-100  hover:font-medium">
                Live
                <span class="mai-chevron-forward text-sm"></span>
              </a>

              <a
                :href="project[i].code"
                target="_blank"
                class="btn hover:bg-indigo-100 hover:font-medium">
                Source Code
                <span class="mai-chevron-forward text-sm"></span>
              </a>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <NavbarFooter />

</template>

<script>
import ProjectData from "../data/projects.js";

import Navbar from "../components/Navbar";
import Services from "../components/Services";
import NavbarFooter from "../components/NavbarFooter";

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

  components: { Navbar, Services, NavbarFooter },
};
</script>

<style scoped>

.space-on-top {
  top: 70px;
}

.project-img{
  border: 3px solid #dad9db;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 5px #6C55F9;
  padding: 0 6px;
  float: left;
  width: 54.99999%;
}

.project-img:hover {
  transform: scale(1.8); margin: 80px 0 0 0;
  z-index: 10;
  transition: transform 0.8s;
  width: 100%;
  height: 100%;
}


@media only screen and (max-width: 700px){
  .project-img {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px){
  .project-img {
    width: 100%;
  }
}

</style>
