<template>
   
    <div class="md:mt-[76px] sm:mt-0 mb-[100px]">
        <div class="bg-indigo-50 page-section pt-5 mb-0">
        <div class="container">
            <div class="row">
            <div class="col-lg-6 py-3 wow zoomIn">
                <div class="img-place text-center hidden lg:flex">
                <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_qhrndegx.json" background="transparent"
                    speed="1" style="max-width: 500px; max-height: 500px" autoplay aria-label="Animation about me"></lottie-player>
                </div>
            </div>
            <div class="col-lg-6 px-4 py-2">
                <h2 class="title-section font-bold text-2xl">
                {{ $t('allaboutMe.title[0]') }}
                <span class="marked">
                    {{ $t('allaboutMe.title[1]') }}
                </span>
                </h2>
                <hr class="divider" aria-hidden="true">

                <div>
                <p class="text-md" v-html="$t('allaboutMe.intro')"></p>
                </div>

                <div class="allaboutMe-me">
                <span class="text-md font-bold">
                    {{ $t('allaboutMe.strengths') }}:
                </span>
                <ul class="text-md ml-2">
                    <li class="my-4">
                    <i class="mdi mdi-check-all mdi-24px marked mr-2" aria-hidden="true"></i>
                    <span v-html="$t('allaboutMe.strengthsDetails[0]')"></span>
                    </li>
                    <li class="my-4">
                    <i class="mdi mdi-check-all mdi-24px marked mr-2" aria-hidden="true"></i>
                    <span v-html="$t('allaboutMe.strengthsDetails[1]')"></span>
                    </li>
                    <li class="my-4">
                    <i class="mdi mdi-check-all mdi-24px marked mr-2" aria-hidden="true"></i>
                    <span v-html="$t('allaboutMe.strengthsDetails[2]')"></span>
                    </li>
                </ul>

                <div class="text-md">
                    <span class="font-bold">
                    {{ $t('allaboutMe.myEngine[0]') }}:
                    </span>
                    {{ $t('allaboutMe.myEngine[1]') }}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="page-section">
            <Skills />
            <Career />
            <Education />
        </div>
        <Personnality />
    </div>

</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import "@lottiefiles/lottie-player";
    const Skills = defineAsyncComponent(() => import('@/components/Skills.vue'));
    const Career = defineAsyncComponent(() => import('@/components/Career.vue'));
    const Education = defineAsyncComponent(() => import('@/components/Education.vue'));
    const Personnality = defineAsyncComponent(() => import('@/components/Personnality.vue'));


    export default {
        name: "AboutPage",

        components: {
            Personnality,
            Skills,
            Career,
            Education,
        },
    };
</script>

<style></style>
