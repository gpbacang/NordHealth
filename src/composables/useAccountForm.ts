import { useForm } from 'vee-validate'

import { useAccountSchema } from '@/composables/useAccountSchema'

export const useAccountForm = (isNew: boolean = false) => {
  const { accountSchema } = useAccountSchema(isNew)

  const { errors, handleSubmit, defineField } = useForm({
    validationSchema: accountSchema,
  })

  const [firstName, firstNameAttrs] = defineField('firstName')
  const [lastName, lastNameAttrs] = defineField('lastName')
  const [email, emailAttrs] = defineField('email')
  const [password, passwordAttrs] = defineField('password')
  const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')
  const [receiveUpdates, receiveUpdatesAttrs] = defineField('receiveUpdates')

  return {
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
  }
}
