<template>
    <div class="relative mb-[130px] px-10 mx-auto w-screen" :class="{ 'md:my-[88px]': addSpace }">
        <div class="d-flex justify-center mt-12 flex-col fade-in">
            <h3 class="text-2xl font-bold mx-auto text-gradient">
                {{ $t('contactPage.title') }}
            </h3>
            <div class="divider w-12 mx-auto fade-in delay-1"></div>
            <p class="sm:w-1/2 mx-auto text-center fade-in delay-2">
                {{ $t('contactPage.description') }}
            </p>
        </div>

        <div class="container">
            <div class="row align-items-start mt-8">
                <div class="col-lg-6 py-3 px-0 wow fadeInUp fade-in delay-3">
                    <ul class="contact-list">
                        <li class="mb-8 d-flex align-center">
                            <i class="mdi mdi-map-marker rounded-full mdi-24px px-2 py-1 marked mr-4 bg-indigo-100"></i>
                            <div class="content"><a href="#">Ile de France, France</a></div>
                        </li>
                        <li class="mb-8 d-flex align-center">
                            <i class="mdi mdi-email rounded-full pa-4 mdi-24px px-2 py-1 marked mr-4 bg-indigo-100"></i>
                            <div class="content"><a href="#">adelekekismath9@gmail.com</a></div>
                        </li>
                        <li class="mb-8 d-flex align-center">
                            <i class="mdi mdi-linkedin rounded-full mdi-24px px-2 py-1 marked mr-4 bg-indigo-100"></i>
                            <div class="content"><a href="#">Kismath ADELEKE</a></div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 py-3 wow fadeInUp fade-in delay-4">
                    <form @submit.prevent="sendEmail()">
                        <div class="py-2 d-flex w-full justify-between">
                            <input type="text" v-model="form.from_name"
                                class="rounded-3 text-sm border border-t-2 w-[48%]"
                                :placeholder="$t('contactPage.form.name')" required />
                            <input type="email" v-model="form.from_email"
                                class="rounded-3 text-sm border border-t-2 w-[48%]"
                                :placeholder="$t('contactPage.form.email')" required />
                        </div>
                        <div class="py-2">
                            <input type="text" v-model="form.subject" class="rounded-3 text-sm border border-t-2 w-full"
                                :placeholder="$t('contactPage.form.subject')" required />
                        </div>
                        <div class="py-2">
                            <textarea v-model="form.message" rows="6" class="form-control text-sm"
                                :placeholder="$t('contactPage.form.message')" required></textarea>
                        </div>
                        <button
                            class="py-2 px-5 bg-indigo-500 mt-4 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-75">
                            {{ $t('contactPage.form.send') }}
                        </button>
                        <v-alert v-if="messageSent" type="success" closable
                            class="p-3 my-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
                            role="alert">
                            <span class="font-medium">{{ $t('contactPage.form.success[0]') }}</span> {{
                                $t('contactPage.form.success[1]') }}
                        </v-alert>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: "Contact",

    data() {
        return {
            form: {
                from_name: '',
                from_email: '',
                subject: '',
                message: ''
            },
            messageSent: false

        };
    },

    props: {
        addSpace: {
            type: Boolean,
            default: true
        }
    },

    methods: {

        sendEmail() {
            const SERVICE_ID = process.env.VUE_APP_SERVICE_ID;
            const TEMPLATE_ID = process.env.VUE_APP_TEMPLATE_ID;
            const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;

            if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
                console.error('EmailJS credentials are not set in the environment variables.');
                return;
            }
            this.messageSent = false;
            emailjs.send(SERVICE_ID, TEMPLATE_ID, this.form, {
                publicKey: PUBLIC_KEY
            })
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    this.resetForm();
                    this.messageSent = true;
                }, (error) => {
                    console.log('FAILED...', error);
                });
        },

        resetForm() {
            this.form = {
                from_name: '',
                from_email: '',
                subject: '',
                message: ''
            }
        }

    }

};
</script>

<style>
    .space-on-top {
        top: 60px;
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

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .mdi {
        transition: transform 0.3s ease, color 0.3s ease;
    }

    .mdi:hover {
        transform: scale(1.2);
        color: #6C55F9;
        /* Couleur de votre thème */
    }
</style>
