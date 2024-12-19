<template>
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
        <input @change="switchMode()" type="checkbox" class="checkbox " id="checkbox">
        <label for="checkbox" class="checkbox-label mr-4">
            <i class="fas  fa-moon"></i>
            <i class="fas  fa-sun"></i>
            <span class="ball"></span>
        </label>
      <button  flat icon @click="switchLanguage('en')"> 🇬🇧</button>
      <button  flat icon @click="switchLanguage('fr')">🇫🇷</button>
    </div>
    </nav>
</template>

<script>


export default {
  
  name: "Navbar",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      isDarkMode: false,
    }
  },
  computed: {
    menuItems() {
      return [
        { title: this.$t('home'), path: '/', icon: 'mdi-home' },
        { title: this.$t('projects'), path: '/projects', icon: 'mdi-view-grid-plus' },
        { title: this.$t('about'), path: '/about', icon: 'mdi-star' },
        { title: this.$t('blog'), path: '/blogs', icon: 'mdi-newspaper' },
        { title: this.$t('contact'), path: '/contact', icon: 'mdi-email' },
      ];
    }
  
  },

  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    },
    switchMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      document.body.classList.toggle('dark-mode');
    },
  },

 
};
</script>

<style scoped>



.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: #6C55F9;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon {color: #fbfaff;}

.fa-sun {color: #fbfaff;}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}

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
