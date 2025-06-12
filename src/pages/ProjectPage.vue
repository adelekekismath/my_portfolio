<template>
    <section class="page-section md:pt-12 md:my-20 mb-32 md:mb-18">
      <div class="container mx-auto px-4  max-w-7xl">
  <!-- Section Header -->
  <div class="text-center  mx-auto mb-16">
    <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
      {{ $t("projectsPage.intro") }}
    </p>
  </div>

  <!-- Projects Grid -->
  <div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
    <div 
      v-for="(project, index) in projects"
      :key="index"
      class="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <div class="relative h-60 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800">
        <img
          :src="project.image || '/project-placeholder.jpg'"
          :alt="project.name"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span class="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 text-xs font-medium px-3 py-1 rounded-full shadow">
           {{ $t(project.status) }}
        </span>
      </div>

      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
            {{ project.category || $t("projectsPage.defaultCategory") }}
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ $t(project.time) }}
          </span>
        </div>

        <!-- Project Title -->
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {{ $t(project.name) }}
        </h3>

        <!-- Project Description -->
        <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {{ $t(project.content) }}
        </p>

        <!-- What I Learned -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            {{ $t("projectsPage.whatDidILearn") }}:
          </h4>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ $t(project.learn) }}
          </p>
        </div>

        <!-- Technologies Stack -->
        <div class="mb-5">
          <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            {{ $t("projectsPage.technologies") }}:
          </h4>
          <div class="flex flex-wrap gap-3">
            <img
                v-for="(tech, techIndex) in project.technologies"
                :key="techIndex"
                :src="tech"
                :alt="'Tech: ' + tech"
                class="tech"
            />
            </div>
        </div>

        <!-- Project Actions -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div class="flex space-x-3">
            <a
              v-if="project.live"
              :href="project.live"
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
            >
              {{ $t("projectsPage.liveDemo") }}
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>

            <a
              v-if="project.code"
              :href="project.code"
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg transition-colors duration-300"
            >
              {{ $t("projectsPage.sourceCode") }}
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </a>
          </div>

        </div>
      </div>

      <!-- Hover Overlay Effect -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </div>
</div>


    </section>
  </template>

  <style scoped>
/* Animation for staggered entry */
.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Line clamping for description */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

/* Smooth image zoom */
img {
  transition: transform 0.7s cubic-bezier(0.2, 0.96, 0.34, 1);
}
</style>

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
