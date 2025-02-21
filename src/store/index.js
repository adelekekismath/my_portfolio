import { createStore } from 'vuex';
import projects from './modules/projects';
import blogs from './modules/blogs';
import skills from './modules/skills';

export default createStore({
  modules: {
    projects,
    blogs,
    skills
  }
});