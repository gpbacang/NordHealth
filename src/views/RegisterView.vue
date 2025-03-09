<script setup lang="ts">
import { useRouter } from 'vue-router'

import RegisterForm from '@/components/RegisterForm.vue'

const router = useRouter()

const routeToLogin = () => {
  router.push({ name: 'login' })
}
</script>

<template>
  <div class="n-typeset p-10">
    <h1>Create an account</h1>
    <div class="flex items-center mt-4 mb-10">
      <div>Already have an account?</div>
      <div class="underline ml-1 cursor-pointer" @click="routeToLogin">Login</div>
    </div>
    <RegisterForm />
  </div>
</template>
