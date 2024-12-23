<template>
  <div class=" lg:w-screen">
    <div class=" container mx-auto lg:w-screen  py-12">
        <div class="max-w-7xl ">
          <h3 class="text-2xl font-bold text-gradient  mb-12">
            {{ $t('education.title') }}
            <div class="divider"></div>
          </h3>
          <div
            class="flex mt-[70px]  flex-col lg:flex-row md:border-t-2 border-gray-300  items-start justify-between space-y-10 md:space-y-0">
            
            <EducationItem 
                v-for="educationItem in educationItems" 
                :key="educationItem.year" 
                :educationItem="educationItem" 
            />
            
          </div>
        </div>
      </div>
  </div>
    

</template>

<script>
    import EducationItem from './EducationItem'
    export default {
        name: 'Education',

        computed: {
            educationItems() {
                return [
                    {
                        year: this.$t('education.items[0].year'),
                        degree: this.$t('education.items[0].degree'),
                        school: this.$t('education.items[0].school'),
                        location: this.$t('education.items[0].location'),
                        description: this.$t('education.items[0].description')
                    },
                    {
                        year: this.$t('education.items[1].year'),
                        degree: this.$t('education.items[1].degree'),
                        school: this.$t('education.items[1].school'),
                        location: this.$t('education.items[1].location'),
                        description: this.$t('education.items[1].description')
                    },
                    {
                        year: this.$t('education.items[2].year'),
                        degree: this.$t('education.items[2].degree'),
                        school: this.$t('education.items[2].school'),
                        location: this.$t('education.items[2].location'),
                        description: this.$t('education.items[2].description')
                    }
                ]
            }
        },
        components: {
            EducationItem
        }
                
        
    }
</script>