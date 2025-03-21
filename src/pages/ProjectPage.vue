<template>
    <section class="page-section md:pt-12 md:my-20 mb-32 md:mb-18">
      <div class="container">
        <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="card p-4 bg-dirty-white transition-all duration-300 rounded-lg dark:bg-gray-800 transform hover:-translate-y-1 fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="flex flex-col space-y-5 h-full cursor-pointer">
              <div
                class="flex items-center justify-center h-full w-full overflow-hidden rounded-t-lg bg-dirty-white"
              >
                <img
                  class="h-full w-full object-cover"
                  :src="project.image"
                  :alt="project.name"
                />
              </div>
  
              <div class="px-3 flex flex-col justify-between h-full flex-grow">
                <div>
                  <h3 class="text-lg font-semibold mb-2">{{ $t(project.name) }}</h3>
                  <p class="text-gray-700 mb-2">{{ $t(project.content) }}</p>
  
                  <p class="text-gray-700 my-2">
                    <strong>{{ $t("projectsPage.time") }}:</strong>
                    {{ $t(project.time) }}
                  </p>
                  <p class="text-gray-700 my-2">
                    <strong>{{ $t("projectsPage.whatDidILearn") }}:</strong>
                    {{ $t(project.learn) }}
                  </p>
                </div>
  
                <div class="flex flex-col pt-2 border-t-2 border-indigo-500 justify-self-end gap-6">
                  <div class="flex flex-wrap gap-3">
                    <img
                      v-for="(tech, techIndex) in project.technologies"
                      :key="techIndex"
                      :src="tech"
                      :alt="'Tech: ' + tech"
                       class="tech"
                    />
                  </div>
  
                  <div class="mt-auto flex gap-3">
                    <a
                      v-if="project.live"
                      :href="project.live"
                      target="_blank"
                      class="btn p-2 link hover:bg-indigo-100 font-medium transition-colors duration-200"
                    >
                      {{ $t("projectsPage.liveDemo") }}
                    </a>
  
                    <a
                      v-if="project.code"
                      :href="project.code"
                      target="_blank"
                      class="btn p-2 link hover:bg-indigo-100 font-medium transition-colors duration-200"
                    >
                      {{ $t("projectsPage.sourceCode") }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProjectPage",

  computed: {
    ...mapState("projects", ["projects"]),
  },

  created() {
    this.fetchProjects();
  },

  methods: {
    ...mapActions("projects", ["fetchProjects"]),
  },
};
</script>

<style scoped>

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-15px);
  box-shadow: 0 10px 20px rgba(108, 85, 249, 0.2);
}

.link {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.link:hover {
  background-color: #6C55F9 !important;
  color: white !important;
  transform: scale(1.05);
}

.tech {
  transition: transform 0.3s ease;
}

.tech:hover {
  transform: scale(1.1);
}


@media (max-width: 700px) {
  .project-img {
    width: 100%;
    margin: 6px 0;
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
