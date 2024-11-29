<template>
  <div class="hidden-on-mobile">
    <nav  class="nav-contaier ">
    <div class="nav-items">
      <button
        class="nav-item"
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
        <router-link
            :to=item.path
          >
            <i class="mdi marked" :class="item.icon"></i>
            <span class="flex-1 ml-2 ">{{ item.title}}</span>
          </router-link>
      </button>
    </div>
      
    <div class="lang-btns">
      <button  flat icon @click="switchLanguage('en')"> 🇬🇧</button>
      <button  flat icon @click="switchLanguage('fr')">🇫🇷</button>
    </div>
    </nav>
  </div>
 
</template>

<script>
import { useDisplay } from 'vuetify';

export default {
  
  name: "Navbar",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: this.$t('home'), path: '/', icon: 'mdi-home' },
          { title: this.$t('projects'), path: '/projects', icon: 'mdi-view-grid-plus' },
          { title: this.$t('about'), path: '/about', icon: 'mdi-star' }
     ],
    
    }
  },
  computed: {
    isSmAndDown() {
      const {smAndDown} = useDisplay();
      return smAndDown.value;
    },
  },

  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },

 
};
</script>

<style scoped>

  a:hover {
    text-decoration: none !important;
  }

  .nav-contaier{
    display: flex;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 5px 10px rgba(24, 24, 24, 0.1);
    gap: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: white;
  }

  .nav-items{
    display: flex;
    margin: 0 auto;
    gap: 30px;
    
  }

  .lang-btns{
    display: flex;
    gap: 10px;
  }



</style>
