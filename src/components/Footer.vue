<template>
    <footer class=" hide-on-mobile absolute mb-[30px] md:mb-0 md-0 bottom-0 left-0 right-0 bg-gray-900 text-white py-4">
        <div class="container mx-auto">
        <div class="flex  flex-col md:flex-row justify-between items-center">
            <div>
            
            <p class="text-sm text-center  pb-3">© 2024-2025 Kismath ADELEKE. {{ $t('allRightsReserved') }}.</p>
            </div>
            <div class="flex space-x-4 m md:mt-0 ">
            <a href="https://github.com/adelekekismath" target="_blank" class="px-1">
                <v-btn size="40px" icon>
                <v-icon size="20px" class="marked ">mdi-github</v-icon>
                </v-btn>
            </a>
            <a href="https://www.linkedin.com/in/kismath-adeleke-a014a81bb/" target="_blank" class="px-1">
                <v-btn size="40px" icon>
                <v-icon size="20px" class="marked">mdi-linkedin</v-icon>
                </v-btn>
            </a>
            <a href="mailto:adelekekismath9@gmail.com" target="_blank" class="px-1">
                <v-btn size="40px" icon>
                <v-icon size="20px" class="marked">mdi-email</v-icon>
                </v-btn>
            </a>
            </div>
        </div>
        </div>
    </footer>

</template>

<script>
export default {
    name: 'Footer'
}

</script>

<style scoped>
    @media screen and (max-width: 768px) {
        .hide-on-mobile {
            display: none;
        }
        
    }
</style>