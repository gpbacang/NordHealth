<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useRegisterForm } from '@/composables/useRegisterForm'
import { useAccountStore } from '@/stores/account'
import type { Account } from '@/types/Account'

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
} = useRegisterForm()

const showPassword = ref(false)
const loading = ref(false)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const onSubmit = handleSubmit((values) => {
  loading.value = true

  try {
    saveAccount(values as Account)
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
    <div style="display: flex; align-items: end; width: 100%" class="n-gap-s">
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
      <provet-button square @click="toggleShowPassword">
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
      v-model="receiveUpdates"
      :value="receiveUpdates"
      v-bind="receiveUpdatesAttrs"
    ></provet-checkbox>
    <provet-button variant="primary" expand style="margin-top: 1.5rem"
      >Create account</provet-button
    >
  </form>
</template>
