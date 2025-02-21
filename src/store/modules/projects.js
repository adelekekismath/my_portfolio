const state = {
    projects: []
  };
  
  const mutations = {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    }
  };
  
  const actions = {
    fetchProjects({ commit }) {
      const projects = require('@/data/projects.json');
      commit('SET_PROJECTS', projects);
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };