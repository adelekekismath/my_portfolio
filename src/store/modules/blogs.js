const state = {
    blogs: []
};


const mutations = {
    SET_BLOGS(state, blogs) {
        state.blogs = blogs;
    }
};


const actions = {
    fetchBlogs({ commit }) {
        const blogs = require('@/data/blogs.json');
        commit('SET_BLOGS', blogs);
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
};