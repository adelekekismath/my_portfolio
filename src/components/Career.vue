<template>

    <div class="row">
        <div class="col-lg-6 p-4 mt-9 lg:mt-0">
            <h2 class="title-section text-2xl">
                {{ $t('skillsAndExperience.title[0]') }}
                <span class="marked">
                    {{ $t('skillsAndExperience.title[1]') }}
                </span>
            </h2>
            <div class="divider"></div>
            <div class="mb-4">

            </div>
            <div class="container mx-auto px-4">
                <div class="relative border-l-2 border-gray-300 pl-6">
                    <!-- Item 1 -->
                    <div class="mb-10">
                        <div
                            class="absolute w-8 h-8 bg-green-500 rounded-full -left-4 top-0 d-flex justify-center align-center">
                            <i class="fa-solid fa-briefcase white"></i>
                        </div>
                        <h3 class="text-lg font-semibold">Développeuse Fullstack</h3>
                        <p class="text-sm text-gray-600">Bien'ici - Septembre 2022 à Septembre 2024</p>
                        <p class="text-gray-700">
                            Développement de l'application "Mega Widget 3D", une solution de visualisation interactive
                            pour projets immobiliers.
                            <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
                                v-if="!readMoreActivated[0]" @click="toggleWorksDetails(0)">
                                read more...
                            </v-btn>
                        </p>
                        <ul v-if="readMoreActivated[0]">
                            <li>Analyse des besoins clients en collaboration avec les parties prenantes.</li>
                            <li>Développement de fonctionnalités avec Vue.js et Node.js.</li>
                            <li>Utilisation des design patterns, dont l'injection de dépendances.</li>
                            <li>Maintenance corrective et évolutive dans un environnement Agile.</li>
                            <li>Technologies : Vue.js, JS Vanilla, Node.js, MongoDB, Git, Jira, Jenkins.</li>
                        </ul>
                        <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
                            v-if="readMoreActivated[0]" @click="toggleWorksDetails(0)">
                            read less...
                        </v-btn>
                    </div>
                    <!-- Item 2 -->
                    <div class="mb-10">
                        <div
                            class="absolute w-8 h-8 bg-green-500 rounded-full -left-4  d-flex justify-center align-center">
                            <i class="fa-solid fa-briefcase white"></i>
                        </div>
                        <h3 class="text-lg font-semibold">Développeuse DevSecOps</h3>
                        <p class="text-sm text-gray-600">Tranquil IT - Avril 2021 à Juillet 2021</p>
                        <p class="text-gray-700">
                            Automatisation de la gestion d'applications grâce aux paquets WAPT.
                            <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
                                v-if="!readMoreActivated[1]" @click="toggleWorksDetails(1)">
                                read more...
                            </v-btn>
                        </p>
                        <ul v-if="readMoreActivated[1]">
                            <li>Développement et personnalisation de paquets WAPT.</li>
                            <li>Tests et validations pour assurer la fiabilité des paquets déployés.</li>
                            <li>Extension des fonctionnalités de WAPT en fonction des besoins clients.</li>
                            <li>Technologies : Python, WAPT, Free Pascal, Git.</li>
                        </ul>
                        <v-btn variant="plain" class="pa-0 text-none underline no-background-hover"
                            v-if="readMoreActivated[1]" @click="toggleWorksDetails(1)">
                            read less...
                        </v-btn>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place text-center">
                <lottie-player src="https://lottie.host/0634f73c-13ea-45c0-ba69-411f0a58f2b0/7HePBzo9CW.json"
                    background="transparent" speed="0.5" style="max-width: 500px; max-height: 500px"
                    autoplay></lottie-player>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Career',
    data() {
        return {
            readMoreActivated: [false, false, false]
        }
    },
    methods: {
        toggleWorksDetails(index) {
            this.readMoreActivated[index] = !this.readMoreActivated[index];
        }
    }
}
</script>

<style scoped>
.no-background-hover::before {
    background-color: inherit !important;
    color: inherit !important;
    box-shadow: none !important;
}
</style>