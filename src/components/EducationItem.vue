<template>
    <div class="flex-1  border-t-2 mb-6  border-gray-300 md:border-0  md:px-4">
        <div class="relative">
            <div class="absolute w-8 h-8 bg-indigo-500 rounded-full -top-10  d-flex justify-center align-center">
                <i class="mdi mdi-school white" color="white"></i>
            </div>
            <div class="pl-8">
                <p class="absolute -top-14  text-lg font-semibold text-gray-700 mb-4">
                    {{ educationItem.year }}
                </p>
                <h3 class="text-lg font-semibold w-72 text-gray-900"> 
                    {{ educationItem.degree }}
                </h3>
                <p class="text-gray-500 mt-2"> 
                    {{ educationItem.school }}
                </p>
                <p class="text-gray-500 text-sm my-1"> 
                    <span> 
                        <i class="mdi mdi-map-marker ml-1"aria-hidden="true"></i>
                    </span>
                    {{ educationItem.location }}
                </p>
                <p class=" mt-2  text-md">
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