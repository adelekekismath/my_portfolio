<template>
  <div class="bg-dirty-white py-12 px-3 md:px-8 w-screen">
    <div class="container">
        <h3 class="text-2xl font-bold mb-10 text-gradient">
      {{ $t("skills.title") }}
      <div class="divider"></div>
    </h3>

    <!-- Skill Categories -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Learned Independently -->
      <div class="bg-dirty-white shadow-md rounded-lg p-3">
        <h2 class="text-xl font-bold mb-4">
          {{ $t("skills.learnIndepentlyWithProjects") }}
        </h2>
        <div class="flex flex-wrap gap-1">
          <span v-for="(skill, index) in skills.independentSkills" :key="index" class="badge">
            <img class="w-20 h-6" :src="skill" alt="" />
          </span>
        </div>
        <router-link to="/projects" class="btn mt-8 py-1 px-3 btn-primary">
          {{ $t("skills.seeProjects") }}
        </router-link>
      </div>

      <!-- Practiced in Companies -->
      <div class="bg-dirty-white shadow-md rounded-lg p-3">
        <h2 class="text-xl font-bold mb-4">
          {{ $t("skills.praticedInCompany") }}
        </h2>
        <div class="flex flex-wrap gap-1">
          <span v-for="(skill, index) in skills.companySkills" :key="index" class="badge">
            <img class="w-20 h-6" :src="skill" alt="" />
          </span>
        </div>
      </div>
    </div>
    </div>
   
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "Skills",
        computed: {
            ...mapState("skills",["skills"]),
        },
        methods: {
            ...mapActions("skills",["fetchSkills"]),
        },
        created() {
            this.fetchSkills();
        },
    };
</script>
