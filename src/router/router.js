import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('../components/Home.vue');
const About = () => import('../pages/AboutPage.vue');
const Projects = () => import('../pages/ProjectPage.vue');
const Blogs = () => import('../pages/BlogsPage.vue');
const Contact = () => import('../components/Contact.vue');
const PageNotFound = () => import("../components/PageNotFound.vue");


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
        path: "/blogs",
        component: Blogs,
        meta: {title: 'Blog | Kismath ADELEKE'}
    },
    {
        path: "/contact",
        component: Contact,
        meta: {title: 'Contact | Kismath ADELEKE'}
    },

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