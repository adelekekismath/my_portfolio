<template>
    <div class="flex-1  md:px-4">
        <div class="relative">
        <div class="absolute w-8 h-8 bg-indigo-500 rounded-full -top-0  d-flex justify-center align-center">
            <i class="fa-solid fa-graduation-cap white" color="white"></i>
        </div>
        <div class="pl-8">
            <p class="text-lg font-semibold text-gray-700 mb-4">{{ educationItem.year }}</p>
            <h3 class="text-xl font-semibold text-gray-900"> {{ educationItem.degree }}</h3>
            <p class="text-gray-500 mt-2"> {{ educationItem.school }}</p>
            <p class="text-gray-500 text-sm my-1"> <span> <i class="fa fa-location-dot ml-1" aria-hidden="true"></i></span>  
            {{ educationItem.location }}
            </p>
            <p class="text-gray-600 mt-2  text-md">
            {{ educationItem.description }}
            </p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EducationItem',
        props: {
            educationItem: {
                type: Object,
                required: true
            }
        }
    }
</script>