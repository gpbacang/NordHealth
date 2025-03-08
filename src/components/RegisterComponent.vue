<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const showPassword = ref<boolean>(false)
// const email = ref<string>('');
// const password = ref<string>('');
const receiveUpdates = ref<boolean>(false)

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
})

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
})

const [firstName, firstNameAttrs] = defineField('firstName')
const [lastName, lastNameAttrs] = defineField('lastName')
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const handleUpdateCheckbox = (event: unknown) => {
  console.log('event', event)
  //   receiveUpdates.value = event.target.value;
}

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="n-typeset p-10">
    <h1>Create an account</h1>
    <div class="flex items-center mt-4 mb-10">
      <div>Already have an account?</div>
      <div style="text-decoration: underline; margin-left: 5px; cursor: pointer">Login</div>
    </div>

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
        v-model="receiveUpdates"
        @change="handleUpdateCheckbox"
      ></provet-checkbox>
      <provet-button variant="primary" expand style="margin-top: 1.5rem"
        >Create account</provet-button
      >
      <!-- <div style="width: 100%" class="n-margin-bs-l">
          <provet-button variant="primary" expand>Create account</provet-button>
        </div> -->
    </form>
  </div>
</template>
