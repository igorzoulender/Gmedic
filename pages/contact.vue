<template>
    <div>
        <Navigation2 />
        <!----Contact Text ----->
        <ContactText />
        <!----Contact Form ----->
        <ContactForm />

    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

import Navigation2 from '@/components/section/header/Header2.vue';
import ContactText from '@/components/section/contact/ContactText.vue';
import ContactForm from '@/components/section/contact/Contact.vue';
</script>
  
  