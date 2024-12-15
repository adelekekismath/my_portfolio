<template>
  <div class=" w-screen bg-indigo-50">
    <div class=" container  px-10 mx-auto w-screen  py-12">
        <div class="max-w-7xl ">
          <h3 class="text-2xl font-bold text-gradient  mb-12">Education
            <div class="divider"></div>
          </h3>
          <div
            class="flex  mx-10  flex-col md:flex-row border-t-2 border-gray-300  items-start justify-between space-y-10 md:space-y-0">
            <!-- Timeline Item -->
            <div class="flex-1 md:px-4">
              <div class="relative">
                <div class="absolute w-8 h-8 bg-green-500 rounded-full -top-0  d-flex justify-center align-center">
                  <i class="fa-solid fa-graduation-cap white" color="white"></i>
                </div>
                <div class="pl-8">
                  <p class="text-lg font-semibold text-gray-700">2024</p>
                  <h3 class="text-xl font-bold text-gray-900">Master of Computer Science</h3>
                  <p class="text-gray-500 mt-2">Sorbonne University</p>
                  <p class="text-gray-500 text-sm my-1"> <span> <i class="fa fa-location-dot ml-1" aria-hidden="true"></i></span> Paris, France</p>
                  <p class="text-gray-600 mt-2  text-md">
                    Explored advanced computer science concepts, specializing in  software
                    engineering and compilation theory.
                  </p>
                </div>
              </div>
            </div>
            <!-- Timeline Item -->
            <div class="flex-1 md:px-4">
              <div class="relative">
                <div class="absolute w-8 h-8 bg-green-500 rounded-full -top-0  d-flex justify-center align-center">
                  <i class="fa-solid fa-graduation-cap white" color="white"></i>
                </div>
                <div class="pl-8">
                  <p class="text-lg font-semibold text-gray-700">2022</p>
                  <h3 class="text-xl font-bold text-gray-900">Bachelor of Computer Science</h3>
                  <p class="text-gray-500 mt-2">University of Angers</p>
                  <p class="text-gray-500 text-sm my-1"> <span> <i class="fa fa-location-dot ml-1" aria-hidden="true"></i></span> Angers, France</p>
                  <p class="text-gray-600 mt-2 text-md">
                    Developed strong foundations in software development and systems design.
                  </p>
                </div>
              </div>
            </div>
          
            <!-- Timeline Item -->
            <div class="flex-1 md:px-4">
              <div class="relative">
                <div class="absolute w-8 h-8 bg-green-500 rounded-full -top-0  d-flex justify-center align-center">
                  <i class="fa-solid fa-graduation-cap white" color="white"></i>
                </div>
                <div class="pl-8">
                  <p class="text-lg font-semibold text-gray-700">2018 </p>
                  <h3 class="text-xl font-bold text-gray-900"> High school diploma</h3>
                  <p class="text-gray-500 mt-2"> High school of Bon Berger
                    
                  </p>
                  <p class="text-gray-500 text-sm my-1"> <span> <i class="fa fa-location-dot ml-1" aria-hidden="true"></i></span> Cotonou, Benin</p>
                  <p class="text-gray-600 mt-2 text-md">
                    Studied a wide range of subjects, including mathematics, physics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    

</template>

<script>
    
    export default {
        name: 'Education',
        
    }
</script>