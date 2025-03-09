<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useRegistrationForm } from '@/composables/useRegistrationForm'
import { useAccountStore } from '@/stores/account'
import type { AccountData } from '@/types/Account'

const router = useRouter()
const { saveAccount } = useAccountStore()
const {
  errors,
  handleSubmit,
  firstName,
  firstNameAttrs,
  lastName,
  lastNameAttrs,
  email,
  emailAttrs,
  password,
  passwordAttrs,
  confirmPassword,
  confirmPasswordAttrs,
  receiveUpdates,
  receiveUpdatesAttrs,
} = useRegistrationForm()

const showPassword = ref(false)
const loading = ref(false)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const onSubmit = handleSubmit((values) => {
  loading.value = true

  try {
    saveAccount(values as AccountData)
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
    <div class="n-grid-2">
      <provet-input
        label="First Name"
        name="firstName"
        expand
        required
        v-model="firstName"
        :error="errors.firstName"
        v-bind="firstNameAttrs"
      ></provet-input>
      <provet-input
        label="Last Name"
        name="lastName"
        expand
        required
        v-model="lastName"
        :error="errors.lastName"
        v-bind="lastNameAttrs"
      ></provet-input>
    </div>
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
    <provet-input
      label="Confirm Password"
      expand
      :type="showPassword ? 'text' : 'password'"
      name="confirmPassword"
      required
      v-model="confirmPassword"
      :error="errors.confirmPassword"
      v-bind="confirmPasswordAttrs"
    ></provet-input>
    <provet-checkbox
      label="Keep me updated with product news and announcements"
      name="receiveUpdates"
      type="checkbox"
      v-model="receiveUpdates"
      v-bind="receiveUpdatesAttrs"
    ></provet-checkbox>
    <provet-button variant="primary" expand class="mt-4">Create account</provet-button>
  </form>
</template>
