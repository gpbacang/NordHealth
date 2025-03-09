<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <main>
    <div class="w-screen h-screen flex items-center justify-center p-6">
      <provet-card class="w-full md:w-1/2">
        <RouterView />
      </provet-card>
    </div>
  </main>
</template>
