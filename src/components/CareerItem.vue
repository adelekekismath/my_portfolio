<template>
     <div class="mb-10">
        <div class="absolute w-8 h-8 bg-indigo-500 rounded-full -left-4  d-flex justify-center align-center">
            <i class="fa-solid fa-briefcase white"></i>
        </div>
        <h3 class="text-lg font-semibold">
            {{ career.title }}
        </h3>
        <p class="text-sm text-gray-600">
            {{ career.company }} 
        </p>
        <p class="text-gray-700">
            {{ career.description }}
            <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
                v-if="!readMoreActivated" @click="toggleWorksDetails()">
                {{ $t('career.readMore') }}
            </v-btn>
        </p>
        <ul v-if="readMoreActivated">
            <li v-for="work in career.moreDetails" :key="work" class="list-disc ml-4">
                {{ work }}
            </li>
        </ul>
        <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
            v-if="readMoreActivated" @click="toggleWorksDetails()">
            {{ $t('career.readLess') }}
        </v-btn>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                readMoreActivated: false
            }
        },
        props: {
            career: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleWorksDetails() {
                this.readMoreActivated = !this.readMoreActivated;
            }
        }
    }
</script>