import { toTypedSchema } from '@vee-validate/yup'
import { computed } from 'vue'
import { object, string, ref, bool } from 'yup'

import { registrationFields, loginFields, accountUpdateFields } from './fields'

import { useAccountStore } from '@/stores/account'

export const useAccountSchema = (action: string = 'registration') => {
  const { account } = useAccountStore()

  const isRegistration = computed(() => action === 'registration')
  const isLogin = computed(() => action === 'login')
  const isAccountUpdate = computed(() => action === 'update')

  const fields = {
    firstName: string()
      .required('First Name is required')
      .default(!isRegistration.value ? (account.firstName ?? '') : ''),
    lastName: string()
      .required('Last Name is required')
      .default(!isRegistration.value ? (account.lastName ?? '') : ''),
    email: string()
      .email()
      .required('Email is required')
      .default(!isRegistration.value ? (account.email ?? '') : ''),
    password: string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .required('Password is required'),
    confirmPassword: string()
      .required('Confirm password is required')
      .oneOf([ref('password')], 'Passwords do not match'),
    receiveUpdates: bool().default(
      !isRegistration.value ? (account.receiveUpdates ?? false) : false,
    ),
  }

  const schema = computed(() => {
    if (isRegistration.value) {
      return Object.fromEntries(
        Object.entries(fields).filter(([key]) => registrationFields.includes(key)),
      )
    } else if (isLogin.value) {
      return Object.fromEntries(Object.entries(fields).filter(([key]) => loginFields.includes(key)))
    } else if (isAccountUpdate.value) {
      return Object.fromEntries(
        Object.entries(fields).filter(([key]) => accountUpdateFields.includes(key)),
      )
    }

    return fields
  })

  const accountSchema = toTypedSchema(object().shape(schema.value))

  return {
    accountSchema,
  }
}
