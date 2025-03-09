<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useLoginForm } from '@/composables/useLoginForm'
import { useAccountStore } from '@/stores/account'
import type { LoginData } from '@/types/Account'

const router = useRouter()
const { saveAccount } = useAccountStore()

const { errors, handleSubmit, email, emailAttrs, password, passwordAttrs } = useLoginForm()

const showPassword = ref(false)
const loading = ref(false)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const onSubmit = handleSubmit((values) => {
  loading.value = true

  try {
    saveAccount(values as LoginData)
    router.push({ name: 'account' })
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-y-3">
    <provet-input
      label="Email"
      name="email"
      expand
      required
      v-model="email"
      :error="errors.email"
      v-bind="emailAttrs"
    ></provet-input>
    <div class="flex gap-x-1" :class="errors.password ? 'items-center' : 'items-end'">
      <provet-input
        label="Password"
        expand
        :type="showPassword ? 'text' : 'password'"
        name="password"
        required
        v-model="password"
        :error="errors.password"
        v-bind="passwordAttrs"
      ></provet-input>
      <provet-button square @click="toggleShowPassword" :class="errors.password ? 'mt-1' : ''">
        <provet-icon
          :name="showPassword ? 'interface-edit-off' : 'interface-edit-on'"
        ></provet-icon>
      </provet-button>
    </div>
    <provet-button type="submit" variant="primary" expand class="mt-4">Login</provet-button>
  </form>
</template>
