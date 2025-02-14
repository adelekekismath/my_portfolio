<template>
    <v-app>
    <Navbar />
    <main class="h-full bg-dirty-white">
        <router-view />
    </main>
    <Footer />
    </v-app>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    const Navbar = defineAsyncComponent(() => import('./components/Navbar.vue'));
    const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));

    export default {
        name: 'App',
        data() {
            return {
                blog: require('./data/data.js').default, 
            };
        },
        components: {
            Navbar,
            Footer
        }
    };
</script>