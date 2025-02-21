<template>
    <div class="page-section md:pt-12 md:my-[76px] mb-[130px] md:mb-[72px]">
        <div class="container">
            <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div v-for="(project, i) in projects" :key="a"
                    class="p-3 pb-0 bg-dirty-white my-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800">
                    <div class="flex flex-col space-y-5 h-full bg-dirty-white rounded-md cursor-pointer">
                        <div class="flex items-center justify-center h-3/4 w-full rounded-t-lg bg-dirty-white">
                            <img class="h-full w-full" :src="project.image" />
                        </div>

                        <div class="flex flex-col">
                            <div class="text-lg font-medium ml-3 mb-2">
                                <a>{{ $t(`${project.name}`) }}</a>
                            </div>
                            <div class="text-base text-gray-700 ml-3 mr-3 mb-2">
                                {{ $t(`${project.content}`) }}
                            </div>

                            <div class="text-base text-gray-700 ml-3 mr-3 my-2">
                                <strong>{{ $t('projectsPage.time') }}:</strong> {{ $t(`${project.time}`) }}
                            </div>
                            <div class="text-base text-gray-700 ml-3 mr-3 my-2">
                                <strong>{{ $t('projectsPage.whatDidILearn') }} :</strong> {{ $t(`${project.learn}`) }}
                            </div>

                            <div class="flex flex-row items-start mt-8 mb-2 space-x-3 ml-2">
                                <img :src="project.tech1" />
                                <img :src="project.tech2" />
                                <img :src="project.tech3" />
                            </div>
                        </div>
                        <div class="my-2">
                            <a v-if="project.live" :href="project.live" target="_blank"
                                class="btn p-2 hover:bg-indigo-100 hover:font-medium">
                                {{ $t("projectsPage.liveDemo") }}
                                <span class="mai-chevron-forward text-sm"></span>
                            </a>

                            <a v-if="project.code" :href="project.code" target="_blank"
                                class="btn p-2 hover:bg-indigo-100 hover:font-medium">
                                {{ $t("projectsPage.sourceCode") }}
                                <span class="mai-chevron-forward text-sm"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';


    export default {
        name: "Project Page",

        computed: {
            ...mapState('projects', ['projects'])
        },

        created() {
            this.fetchProjects();
        },

        methods: {
            ...mapActions('projects', ['fetchProjects'])
        },

        props: {
            blog: Array,
        },
    };
</script>

<style scoped>
    .space-on-top {
        top: 70px;
    }

    .project-img {
        border-radius: 15px;
        float: left;
    }

    .project-img:hover {
        transform: scale(1.3);
        margin: 80px 0 0 0;
        z-index: 10;
        transition: transform 0.8s;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 700px) {
        .project-img {
            width: 49.99999%;
            margin: 6px 0;
        }
    }

    @media only screen and (max-width: 500px) {
        .project-img {
            width: 100%;
        }
    }
</style>
