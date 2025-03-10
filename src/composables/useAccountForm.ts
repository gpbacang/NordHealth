import { useForm } from 'vee-validate'

import { useAccountSchema } from '@/composables/useAccountSchema'

export const useAccountForm = () => {
  const { accountSchema } = useAccountSchema('update')

  const { errors, handleSubmit, defineField } = useForm({
    validationSchema: accountSchema,
  })

  const [firstName, firstNameAttrs] = defineField('firstName')
  const [lastName, lastNameAttrs] = defineField('lastName')
  const [email, emailAttrs] = defineField('email')

  return {
    errors,
    handleSubmit,
    firstName,
    firstNameAttrs,
    lastName,
    lastNameAttrs,
    email,
    emailAttrs,
  }
}
