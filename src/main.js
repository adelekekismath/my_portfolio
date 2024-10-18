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

import { MotionPlugin } from '@vueuse/motion'

const messages = {
    en: en,   // Fichiers de traduction anglais
    fr: fr    // Fichiers de traduction français
  };



  // Créer une instance VueI18n
const i18n = createI18n({
    locale: 'en', // Langue par défaut
    allowComposition: true,
    fallbackLocale: 'fr', // Langue de repli si la langue choisie n'existe pas
    messages,  // Les messages de traduction
  });



const app = createApp(App);
app.use(i18n);
app.use(MotionPlugin);
app.use(router);


// app.config.globalProperties.$switchLanguage = (lang) => {
//     i18n.locale = lang;
// };


app.mount("#app");