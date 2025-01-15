<template>
   
    <div
      class="page-section md:pt-12  md:my-[76px] mb-[130px] md:mb-[72px]">
      <div class="container">
        <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4">

          <div
            v-for="(a, i) in project"
            :key="a"
            class="p-3 pb-0 bg-white my-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800" >
            <div
              class="flex flex-col space-y-5 h-full bg-white rounded-md  cursor-pointer">
              <div
                class="flex items-center justify-center h-3/4 w-full  rounded-t-lg bg-white ">
                <img class="h-full w-full  " :src="project[i].image" />
              </div>

              <div class="flex flex-col ">
                <div class="text-lg font-medium  ml-3 mb-2">
                  <a>{{ $t(`${project[i].name}`) }}</a>
                </div>
                <div
                  class="text-base  text-gray-700 ml-3 mr-3 mb-2">
                  {{  $t(`${project[i].content}`) }}
                </div>

                <div
                  class="flex flex-row items-start mt-8 mb-2 space-x-3 ml-2">
                  <img :src="project[i].tech1" />
                  <img :src="project[i].tech2" />
                  <img :src="project[i].tech3" />
                </div>
              </div>
              <div class="my-2" >
              <a v-if="project[i].live"
                :href="project[i].live"
                target="_blank"
                class="btn p-2  hover:bg-indigo-100  hover:font-medium">
                {{ $t('projectsPage.liveDemo') }}
                <span class="mai-chevron-forward text-sm"></span>
              </a>

              <a v-if="project[i].code"
                :href="project[i].code"
                target="_blank"
                class="btn p-2 hover:bg-indigo-100 hover:font-medium">
                {{ $t('projectsPage.sourceCode') }}
                <span class="mai-chevron-forward text-sm"></span>
              </a>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import ProjectData from "../data/projects.js";

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

};
</script>

<style scoped>

.space-on-top {
  top: 70px;
}

.project-img{
  border-radius: 15px;
  float: left;
}

.project-img:hover {
  transform: scale(1.3); margin: 80px 0 0 0;
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
