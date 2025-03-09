import { useForm } from 'vee-validate'

import { registerFormSchema } from '@/components/registerFormSchema'

export const useRegisterForm = () => {
  const { errors, handleSubmit, defineField } = useForm({
    validationSchema: registerFormSchema,
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
