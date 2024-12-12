<template>

  <Navbar />
  <div class="page-section space-on-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp">
          <h2 class="title-section">Contact information</h2>
          <div class="divider"></div>
          <p>
            Great genius takes shape by contact with another great genius,
            <br />
            but, less by assimilation than by friction.
          </p>

          <ul class="contact-list">
            <li>
              <div class="icon"><span class="mai-mail"></span></div>
              <div class="content"><a href="#">adelekekismath9@gmail.com</a></div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 py-3 wow fadeInUp">
          <div class="subhead">Contact Me</div>
          <h2 class="title-section">Get In Touch</h2>
          <div class="divider"></div>

          <form @submit.prevent="sendEmail()">
            <div class="py-2">
              <input type="text" v-model="form.from_name" class="form-control" placeholder="Full name" required />
            </div>
            <div class="py-2">
              <input type="email" v-model="form.from_email" class="form-control" placeholder="Email" required />
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
            <button type="submit" class="btn btn-primary rounded-pill mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>

  <Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
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
    Footer: Footer,
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
