<template>
    <div class="relative mb-[130px]  px-10 mx-auto w-screen" :class="{ 'md:my-[88px]': addSpace }">
        <div class="d-flex justify-center mt-12 flex-col ">
            <h3 class="text-2xl font-bold mx-auto  text-gradient">
                {{ $t('contactPage.title') }}
            </h3>
            <div class="divider w-12 mx-auto"></div>
            <p class="sm:w-1/2 mx-auto text-center">
                {{ $t('contactPage.description') }}
            </p>
        </div>

        <div class="container">
            <div class="row align-items-start mt-8">
                <div class="col-lg-6 py-3 px-0 wow fadeInUp">

                    <ul class="contact-list">
                        <li class="mb-8 d-flex align-center">
                            <i
                                class="fa-solid fa-location-dot rounded-full pa-4 fa-xl px-4 py-6 marked  mr-4 bg-indigo-100"></i>
                            <div class="content"><a href="#"> Ile de france, France</a></div>
                        </li>
                        <li class="mb-8  d-flex align-center">
                            <i class="fa-solid fa-at rounded-full pa-4 fa-xl px-4 py-6 marked mr-4 bg-indigo-100"></i>
                            <div class="content"><a href="#">adelekekismath9@gmail.com</a></div>
                        </li>
                        <li class="mb-8  d-flex align-center">
                            <i
                                class="fa-brands fa-linkedin rounded-full pa-4 fa-xl px-4 py-6 marked mr-4 bg-indigo-100"></i>
                            <div class="content"><a href="#">Kismath ADELEKE</a></div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 py-3 wow fadeInUp">

                    <form @submit.prevent="sendEmail()">
                        <div class="py-2 d-flex w-full justify-between">
                            <input type="text" v-model="form.from_name" class=" rounded-3 text-sm border border-t-2  w-[48%]"
                                :placeholder="$t('contactPage.form.name')" required />
                            <input type="email" v-model="form.from_email" class=" rounded-3 text-sm border border-t-2 w-[48%]"
                                :placeholder="$t('contactPage.form.email')" required />
                        </div>
                        <div class="py-2">
                            <input type="text" v-model="form.subject" class=" rounded-3 text-sm border border-t-2 w-full"
                                :placeholder="$t('contactPage.form.subject')" required />
                        </div>
                        <div class="py-2">
                            <textarea v-model="form.message" rows="6" class="form-control text-sm" :placeholder="$t('contactPage.form.message')"
                                required></textarea>
                        </div>
                        <button
                            class="py-2 px-5 bg-indigo-500 mt-4 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-75">
                            {{ $t('contactPage.form.send') }}
                        </button>
                        <v-alert v-if="messageSent" type="success" closable  class="p-3 my-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span class="font-medium"> {{ $t('contactPage.form.success[0]') }} </span> {{ $t('contactPage.form.success[1]') }}
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
            SERVICE_ID: 'service_xz6m0jd',
            TEMPLATE_ID: 'template_5lt8jlj',
            PUBLIC_KEY: '9WIP4h2NeWpzmES9L',
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
            this.messageSent = false;
            emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, this.form, {
                publicKey: this.PUBLIC_KEY
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
</style>
