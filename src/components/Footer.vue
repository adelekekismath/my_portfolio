<template>
    <footer class="bg-gray-900 text-white py-6">
        <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div>
            
            <p class="text-sm">© 2024 Kismath ADELEKE. All rights reserved.</p>
            </div>
            <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/adelekekismath" target="_blank" class="px-2">
                <v-btn icon>
                <v-icon class="marked">mdi-github</v-icon>
                </v-btn>
            </a>
            <a href="https://www.linkedin.com/in/kismath-adeleke-a014a81bb/" target="_blank" class="px-3">
                <v-btn icon>
                <v-icon class="marked">mdi-linkedin</v-icon>
                </v-btn>
            </a>
            <a href="mailto:adelekekismath9@gmail.com" target="_blank" class="px-3">
                <v-btn icon>
                <v-icon class="marked">mdi-email</v-icon>
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