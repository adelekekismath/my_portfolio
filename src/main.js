import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import * as fr from '../locale/fr.json';
import * as en from '../locale/en.json';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from './router/router.js';
import './data/projects.js';
import './style/home.css';
import './style/tailwind.css';
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { MotionPlugin } from '@vueuse/motion'

const vuetify = createVuetify({
  components,
  directives,
});

const messages = {
    en: en,
    fr: fr
  };


const i18n = createI18n({
    locale: 'en',
    allowComposition: true,
    fallbackLocale: 'fr', 
    messages,
  });



const app = createApp(App);
app.config.compilerOptions.isCustomElement = tag => tag === 'lottie-player'
app.use(i18n);
app.use(MotionPlugin);
app.use(router);
app.use(vuetify);


app.config.globalProperties.$switchLanguage = (lang) => {
    i18n.locale = lang;
};


app.mount("#app");