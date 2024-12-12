import { createWebHistory, createRouter } from 'vue-router';

import Home from '../components/Home.vue';
import About from '../discover/AboutPage.vue';
import Projects from '../discover/ProjectPage.vue';
import Blog from '../discover/BlogPage.vue';
import Contact from '../components/Contact.vue';
import Allblogs from '../components/Allblogs.vue';
import SingleProject from "../components/SingleProject.vue";

import PageNotFound from "../components/PageNotFound.vue";


import Login from '../firebase/Login.vue';
import Signup from '../firebase/Signup.vue';
import Dashboard from '../firebase/Dashboard.vue';
import Upload from "../firebase/Upload.vue";


const routes = [{
        path: "/",
        component: Home,
        meta: {title: 'Home | Kismath ADELEKE'}
    },
    {
        path: "/about",
        component: About,
        meta: {title: 'About | Kismath ADELEKE'}
    },
    {
        path: "/projects",
        component: Projects,
        meta: {title: 'Projects | Kismath ADELEKE'}
    },
    {
        path: "/blog",
        component: Blog,
        meta: {title: 'Blog | Kismath ADELEKE'}
    },
    {
        path: "/contact",
        component: Contact,
        meta: {title: 'Contact | Kismath ADELEKE'}
    },
    {
        path: "/blogs",
        component: Allblogs,
        meta: {title: 'All Blogs | Kismath ADELEKE'}
    },
    {
        path: "/singleproject/:id",
        component: SingleProject,
        meta: {title: 'Single Project | Kismath ADELEKE'}
    },
    // {
    //     path: "/login",
    //     component: Login,
    // },
    // {
    //     path: "/signup",
    //     component: Signup,
    // },
    // {
    //     path: "/dashboard",
    //     component: Dashboard,
    // },
    // {
    //     path: "/upload",
    //     component: Upload,
    // },

    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
        meta: {title: 'Page Not Found | Kismath ADELEKE'}
    },
];





const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    linkActiveClass: 'vue-school-active-link',

});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Kismath Adeleke';
    next();
  });

export default router;