const state = {
    skills: []
};


const mutations = {
    SET_SKILLS(state, skills) {
        state.skills = skills;
    }
};

const actions = {
    fetchSkills({ commit }) {
        const skills = require('@/data/skills.json');
        commit('SET_SKILLS', skills);
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
};
