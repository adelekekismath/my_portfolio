<template>
    <a v-if="isLink"  :href="url" target="_blank"  class="ml-3">
      <v-btn aria-label="{{ icon }}" icon>
        <v-icon class="marked">{{ icon }}</v-icon>
      </v-btn>
    </a>
    <v-btn @click="this.$emit('on-click')"  v-else icon class="ml-3">
      <v-icon class="marked">{{ icon }}</v-icon>
    </v-btn>
  </template>
  
  <script>
  export default {
    name: "SocialLink",
    props: {
      url: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      isLink : {
        type: Boolean,
        default: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>