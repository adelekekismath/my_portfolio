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
            <span class="flex-1 ml-2 text-md ">{{ item.title}}</span>
          </router-link>
      </button>
    </div>
      
    <div class="lang-btns">
        <input @change="switchLanguage()" type="checkbox" class="checkbox" id="checkbox">
        <label for="checkbox"  class="checkbox-label text-sm  mr-4">
            <span class="mx-1">fr</span>
            <span class="mx-1">en</span>
            <span class="ball"></span>
        </label>
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
      isEnglish: true,
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
    switchLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'fr' : 'en';
    }
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
  width: 55px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}



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
  transform: translateX(28px);
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
    color: gray;
    
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





</style>
