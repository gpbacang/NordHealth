<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AuthorizationLayout from '@/layouts/AuthorizationLayout.vue'
import { useNotification } from '@/stores/notification'

const route = useRoute()
const notificationStore = useNotification()

const isProtectedRoute = computed(() => route.meta.requiresAuth)

watch(
  () => notificationStore.showNotification,
  () => {
    if (notificationStore.showNotification) {
      const group = document.querySelector('provet-toast-group')
      group?.addToast(notificationStore.message, { variant: notificationStore.variant })
      group?.addEventListener('dismiss', () => {
        notificationStore.showNotification = false
      })
    }
  },
)
</script>
<template>
  <AppLayout v-if="isProtectedRoute" />
  <AuthorizationLayout v-else />
  <provet-toast-group> </provet-toast-group>
</template>
