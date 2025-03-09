<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue'
</script>

<template>
  <div class="n-typeset p-10">
    <h1>Create an account</h1>
    <div class="flex items-center mt-4 mb-10">
      <div>Already have an account?</div>
      <div style="text-decoration: underline; margin-left: 5px; cursor: pointer">Login</div>
    </div>
    <RegisterForm />
  </div>
</template>
