import { toTypedSchema } from '@vee-validate/yup'
import { object, string, ref, bool } from 'yup'

import { useAccountStore } from '@/stores/account'

export const useAccountSchema = (isNew: boolean = false) => {
  const { account } = useAccountStore()

  const accountSchema = toTypedSchema(
    object().shape({
      firstName: string()
        .required('First Name is required')
        .default(!isNew ? (account.firstName ?? '') : ''),
      lastName: string()
        .required('Last Name is required')
        .default(!isNew ? (account.lastName ?? '') : ''),
      email: string()
        .email()
        .required('Email is required')
        .default(!isNew ? (account.email ?? '') : ''),
      password: string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .required('Password is required'),
      confirmPassword: string()
        .required('Confirm password is required')
        .oneOf([ref('password')], 'Passwords do not match'),
      receiveUpdates: bool().default(!isNew ? (account.receiveUpdates ?? false) : false),
    }),
  )

  return {
    accountSchema,
  }
}
