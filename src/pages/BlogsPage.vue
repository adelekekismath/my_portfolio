<template>
  <div class="pt-8 page-section md:mt-[76px] mb-[130px] md:mb-[72px]">
    <div class="container mx-auto px-4 pb-8 max-w-7xl">
      <div class="text-center  mx-auto mb-16">
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ $t("blogs.intro") }}
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <article 
          v-for="(blog, i) in sortedBlogs" 
          :key="i"
          class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
        >
          
          <div class="h-48 w-full relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600">
            <img 
              :src="blog.image || '/placeholder-article.jpg'" 
              :alt="blog.title"
              class=" mx-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
           
            <span class="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
              {{ blog.category || $t("blogs.defaultCategory") }}
            </span>
          </div>

         
          <div class="p-6">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {{ blog.date || $t("blogs.defaultDate") }}
            </p>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
              <a :href="blog.link" target="_blank" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {{ $t(`${blog.title}`) }}
              </a>
            </h3>
            
            <!-- Excerpt -->
            <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
              {{ $t(`${blog.intro}`) }}
            </p>
            
            <!-- Read More -->
            <div class="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
              <a 
                :href="blog.link" 
                target="_blank"
                class="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
              >
                {{ $t("blogs.readMore") }}
                <svg class="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              
              <!-- Reading Time -->
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ blog.readingTime  }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
article::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.02) 100%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

article:hover::after {
  opacity: 1;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>


<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "Blog Page",
    
    computed: {
        ...mapState("blogs",["blogs"]),
        sortedBlogs() {
            return [...this.blogs].sort((a, b) => {
            const convertDate = (dateStr) => {
                const [year, month, day] = dateStr.split('.').map(Number)
                return new Date(year, month - 1, day) // 
            }
            
            const dateA = convertDate(a.date)
            const dateB = convertDate(b.date)
            
            return  dateA - dateB // 
            })
        }
    
    },
    methods: {
        ...mapActions("blogs",["fetchBlogs"]),
    },
    created() {
        this.fetchBlogs();
    },
    
};
</script>

<style scoped>
.space-on-top {
    top: 60px;
}

.card {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(108, 85, 249, 0.2);
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
