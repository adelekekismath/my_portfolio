<template>
  <div >
    <nav  class="nav-contaier ">
    <div class="nav-items hidden-on-mobile">
      <button
        class="nav-item"
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
        <router-link :to=item.path active-class="active-nav-item">
            <i class="mdi marked"  :class="item.icon"></i>
            <span class="flex-1 ml-2 text-md">{{ item.title}}</span>
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

export default {
  
  name: "Navbar",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
    
    }
  },
  computed: {
    menuItems() {
      return [
        { title: this.$t('home'), path: '/', icon: 'mdi-home' },
        { title: this.$t('projects'), path: '/projects', icon: 'mdi-view-grid-plus' },
        { title: this.$t('about'), path: '/about', icon: 'mdi-star' },
        { title: this.$t('blog'), path: '/blog', icon: 'mdi-newspaper' },
      ];
    }
  
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

  i.marked {
    font-size: 1.4rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .nav-contaier{
    display: flex;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 5px 10px rgba(24, 24, 24, 0.1);
    gap: 12px;
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

  @media (max-width: 768px) {
    .lang-btns{
      margin-left: auto;
      gap: 20px !important;
      font-size: 1.2rem;
    }

    .nav-contaier{
      box-shadow: none !important;
      position: relative !important;
      border: none !important;

    }
  }

  .active-nav-item {
    color: #6C55F9;
    text-shadow: 0 0 black;
  }



</style>
