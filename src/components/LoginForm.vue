<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useLoginForm } from '@/composables/useLoginForm'
import { useAccountStore } from '@/stores/account'
import { useNotification } from '@/stores/notification'

const router = useRouter()
const { account } = useAccountStore()
const notificationStore = useNotification()

const { errors, handleSubmit, email, emailAttrs, password, passwordAttrs } = useLoginForm()

const showPassword = ref(false)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const onSubmit = handleSubmit((values) => {
  if (account.email === values.email && account.password === values.password) {
    router.push({ name: 'account' })
  } else {
    notificationStore.showNotification = true
    notificationStore.message =
      'Account not found. Please check your credentials or create an account to continue'
    notificationStore.variant = 'danger'
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
