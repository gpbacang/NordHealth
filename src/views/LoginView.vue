<script setup lang="ts">
import { useRouter } from 'vue-router'

import LoginForm from '@/components/LoginForm.vue'

const router = useRouter()

const routeToRegistration = () => {
  router.push({ name: 'register' })
}
</script>

<template>
  <div class="n-typeset p-10">
    <h1>Login</h1>
    <div class="flex items-center mt-4 mb-10">
      <div>Don't have an account yet?</div>
      <div class="underline ml-1 cursor-pointer" @click="routeToRegistration">
        Create an account
      </div>
    </div>
    <LoginForm />
  </div>
</template>
