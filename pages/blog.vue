<template>
    <div>
        <Navigation2 />
        <!----Contact Text ----->
        <CallActionAsk />
        <!----Contact Form ----->
        <Blog />

    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Blog from '@/components/section/blogs/Blog.vue';
import CallActionAsk from  '@/components/section/c2a/C2a1.vue';

import Navigation2 from '@/components/section/header/Header2.vue';
</script>
  
  