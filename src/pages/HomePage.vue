<template>
    <v-container class="bg-dirty-white hero-section sm:h-full md:h-[90%] pt-0">
        <v-row class="d-flex align-center justify-center header-desc">
            <v-col cols="12" lg="5" sm="6">
                <v-sheet elevation="0" class="pa-5 bg-dirty-white">
                    <div class="d-flex align-center">
                        <div cols="12">
                            <h1 class="text-sm uppercase mb-4 fade-in">{{ $t("welcome") }}</h1>
                            <h2 class="xs:text-3xl sm:text-4xl mb-6 font-medium fade-in delay-1">
                                {{ $t("title[0]") }}
                                    <span class="marked">
                                        {{ $t("name") }}
                                    </span>
                                <br />
                                {{ $t("title[1]") }}
                            </h2>
                            <p class="text-l mb-5 fade-in delay-2">
                                {{ $t("quickDescription") }}
                            </p>
            
                            <div class="availability-indicator mb-5 fade-in delay-3">
                                <v-icon left class="mr-1 marked border-blink">mdi-circle</v-icon>
                                <div class="text-l ml-2 max-w-xs marked">
                                    {{ $t("availableForHire") }}
                                </div>
                            </div>
            
                            <div class="d-flex align-center gap-1 mt-4 fade-in delay-4">
                                <SocialLink
                                    url="https://github.com/adelekekismath"
                                    icon="mdi-github"
                                />
                                <SocialLink
                                    url="https://www.linkedin.com/in/kismath-adeleke-a014a81bb/"
                                    icon="mdi-linkedin"
                                />
                                <SocialLink
                                    url="mailto:adelekekismath9@gmail.com"
                                    icon="mdi-email"
                                />
                            </div>
            
                            <v-btn
                                aria-label="Download my resume"
                                class="mt-5 text-none fade-in delay-5"
                                color="#6C55F9"
                                dark
                                @click="downloadResume()"
                            >
                                {{ $t("downloadResume") }}
                            </v-btn>
                        </div>
                    </div>
                </v-sheet>
            </v-col>
    
            <v-col cols="12" lg="7" sm="6" class="">
                <v-sheet class="bg-dirty-white md:mb-0 mb-10">
                    <!-- Lottie animation -->
                    <lottie-player
                        src="https://assets4.lottiefiles.com/packages/lf20_thiu5nbr.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    >
                    </lottie-player>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { defineAsyncComponent } from "vue";
    import "@lottiefiles/lottie-player";
    const SocialLink = defineAsyncComponent(() => import("@/components/SocialLink.vue"));

    export default {
        name: "HomePage",
        components: {
            SocialLink,
        },
        methods: {
            downloadResume() {
            const resumeUrl = "/assets/pdf/resume.pdf";
            window.open(resumeUrl, "_blank");
            },
        },
    };
</script>

<style scoped>
    .hero-section {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 80px;
    }

    .availability-indicator {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 600px) {
        .header-desc {
            margin-top: -50px;
            margin-bottom: 80px !important;
        }
        .hero-section {
            margin-top: 20px;
        }
    }
    .border-blink {
        border-radius: 49%;
        animation: blink 1.5s infinite ease-in-out;
    }

    @keyframes blink {
    0% {
        box-shadow: 0 0 10px 1px #6c55f9;
    }
    50% {
        box-shadow: 0 0 15px 3px #6c55f9;
    }
    100% {
        box-shadow: 0 0 10px 1px #6c55f9;
    }
    }

    .fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

.delay-3 {
  animation-delay: 0.9s;
}

.delay-4 {
  animation-delay: 1.2s;
}

.delay-5 {
  animation-delay: 1.5s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-link {
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  transform: scale(1.2);
  color: #6C55F9; /* Couleur de votre thème */
}
</style>
