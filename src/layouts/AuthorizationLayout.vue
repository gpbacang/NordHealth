<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="n-padding-xxl">
    <provet-card class="100vh">
      <section class="h-full">
        <main>
          <RouterView />
        </main>
      </section>
    </provet-card>
  </div>
</template>
