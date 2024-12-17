<template>
  <div class="relative mb-8  px-10 mx-auto w-screen" :class="{'space-on-top': addSpace}">
    <div class="d-flex justify-center mt-12 flex-col ">
        <h3 class="text-2xl font-bold mx-auto text-gradient ">
            {{ $t('contactMe.title') }}
        </h3>
        <div class="divider w-12 mx-auto"></div>
        <p class="w-1/2 mx-auto text-center">
            {{ $t('contactMe.description') }}
        </p>
    </div>
   
    <div class="container">
      <div class="row align-items-start mt-8">
        <div class="col-lg-6 py-3 wow fadeInUp">
          

          <ul class="contact-list">
            <li class="mb-8">
                <i class="fa-solid fa-location-dot rounded-full pa-4 fa-xl px-4 py-6 marked  mr-4 bg-indigo-100" ></i>
                <div class="content"><a href="#"> Ile de france, France</a></div>
            </li>
            <li class="mb-8">
                <i class="fa-solid fa-at rounded-full pa-4 fa-xl px-4 py-6 marked mr-4 bg-indigo-100"></i>
                <div class="content"><a href="#">adelekekismath9@gmail.com</a></div>
            </li>
            <li class="mb-8">
                <i class="fa-brands fa-linkedin rounded-full pa-4 fa-xl px-4 py-6 marked mr-4 bg-indigo-100"></i>
                <div class="content"><a href="#">Kismath ADELEKE</a></div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 py-3 wow fadeInUp">

          <form @submit.prevent="sendEmail()">
            <div class="py-2 d-flex w-full justify-between">
              <input type="text"  v-model="form.from_name" class=" rounded-3 border border-t-2  w-[48%]" placeholder="Your full name" required />
              <input type="email" v-model="form.from_email" class=" rounded-3 border border-t-2 w-[48%]" placeholder="Your email" required />
            </div>
            <div class="py-2">
              <input type="text" v-model="form.subject" class=" rounded-3 border border-t-2 w-full" placeholder="Subject" required />
            </div>
            <div class="py-2">
              <textarea
                v-model="form.message"
                rows="6"
                class="form-control"
                placeholder="Enter message"
                required
              ></textarea>
            </div>
            <button class="py-2 px-5 bg-indigo-500 mt-4 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-75">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>

  <NavbarFooter />
</template>

<script>
import Navbar from "./Navbar.vue";
import NavbarFooter from "./NavbarFooter.vue";
import emailjs from '@emailjs/browser';

export default {
  name: "Contact",

  data() {
    return {
      form: {
        from_name: '',
        from_email: '',
        message: ''
      },
      SERVICE_ID: 'service_xz6m0jd',
      TEMPLATE_ID: 'template_5lt8jlj',
      PUBLIC_KEY: '9WIP4h2NeWpzmES9L'

    };
  },

  components: {
    Navbar: Navbar,
    NavbarFooter: NavbarFooter,
  },

  props: {
    addSpace: {
      type: Boolean,
      default: true
    }
  },

  methods: {

    sendEmail() {
      emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, this.form, {
          publicKey: this.PUBLIC_KEY
        })
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
    }
  }

};
</script>

<style>
.space-on-top{
  top: 60px;
}

</style>
