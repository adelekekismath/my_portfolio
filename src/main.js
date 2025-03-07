import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import * as fr from '../locale/fr.json';
import * as en from '../locale/en.json';

import "bootstrap/dist/css/bootstrap.min.css";

import router from './router/router.js';
import './style/home.css';
import './style/tailwind.css';
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { MotionPlugin } from '@vueuse/motion'
import createStore from './store/index.js';


const Store = createStore;



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
app.use(Store);
app.use(i18n);
app.use(MotionPlugin);
app.use(router);
app.use(vuetify, {
    iconfont: 'mdi'
  });


app.config.globalProperties.$switchLanguage = (lang) => {
    i18n.locale = lang;
};


app.mount("#app");