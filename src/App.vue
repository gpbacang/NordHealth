<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <!-- <provet-stack class="n-reset"> -->
  <div class="n-padding-xxl">
    <provet-card style="height: 100%">
      <section style="height: 100%">
        <!-- <div
          class="n-color-accent n-border-radius n-color-text-on-accent n-typeset"
          style="height: 100%"
        >
          <div class="n-padding-m">
            <h1 class="n-color-text-on-accent">Vue App</h1>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              provident aliquid corporis tempora eius quam, quae vel molestias
              esse maxime aperiam totam suscipit. Nobis consectetur optio
              reprehenderit animi? Suscipit, quibusdam?
            </div>
          </div>
        </div> -->
        <div>
          <RouterView />
        </div>
      </section>
    </provet-card>
  </div>
  <!-- </provet-stack> -->
</template>
