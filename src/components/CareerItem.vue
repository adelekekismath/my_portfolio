<template>
     <div class="mb-10 text-md">
        <div class="absolute w-8 h-8 bg-indigo-500 rounded-full -left-4  d-flex justify-center align-center">
            <i class="mdi mdi-briefcase  white"></i>
        </div>
        <h3 class="text-lg font-semibold">
            {{ career.title }}
        </h3>
        <p class="text-sm ">
            {{ career.company }} 
        </p>
        <p class="text-md ">
            {{ career.context }}
            <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
                v-if="!readMoreActivated" @click="toggleWorksDetails()">
                {{ $t('career.readMore') }}
            </v-btn>
        </p>
        <div v-if="readMoreActivated">

                <p>
                    <span class="font-bold"> 
                        {{ career.team.title }}:
                    </span>
                    {{ career.team.content }}
                </p>
                <div class=" mt-2">
                    <span class="font-bold">
                        {{ career.tasks.title }}:
                    </span>
                    
                    <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li v-for="task in career.tasks.content" :key="task" class="mt-1 list-disc ml-4">
                            {{ task }}
                        </li>
                    </ul>
                </div> 
                
                <p>
                    <span class="font-bold"> 
                        {{ career.tools.title }}:
                    </span>
                    {{ career.tools.content }}
                </p>

                <div class=" mt-2">
                    <span class="font-bold">
                        {{ career.results.title }}:
                    </span>
                    <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li v-for="result in career.results.content" :key="result" class="mt-1 list-disc ml-4">
                            {{ result }}
                        </li>
                    </ul>
                </div>
                
              

            <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
                v-if="readMoreActivated" @click="toggleWorksDetails()">
                {{ $t('career.readLess') }}
            </v-btn>
        </div>
        <!-- <ul>
            <li v-for="work in career.moreDetails" :key="work" class="list-disc ml-4">
                {{ work }}
            </li>
        </ul> -->
        
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