<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useAccountForm } from '@/composables/useAccountForm'
import { useAccountStore } from '@/stores/account'
import type { AccountUpdateData } from '@/types/Account'

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
} = useAccountForm()

const onSubmit = handleSubmit((values) => {
  saveAccount(values as AccountUpdateData)
})

const onLogout = () => {
  router.push({ name: 'login' })
}
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-y-3">
    <div class="flex flex-col md:flex-row gap-2">
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
  </form>
  <div class="mt-4 flex justify-end gap-x-2">
    <provet-button @click="onLogout">Logout</provet-button>
    <provet-button type="submit" variant="primary" @click="onSubmit">Save changes</provet-button>
  </div>
</template>
