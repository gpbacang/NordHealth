<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AuthorizationLayout from '@/layouts/AuthorizationLayout.vue'

const route = useRoute()

const isProtectedRoute = computed(() => route.meta.requiresAuth)
</script>
<template>
  <AppLayout v-if="isProtectedRoute" />
  <AuthorizationLayout v-else />
</template>
