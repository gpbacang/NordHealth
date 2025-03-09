import { useForm } from 'vee-validate'

import { useAccountSchema } from '@/composables/useAccountSchema'

export const useLoginForm = () => {
  const { accountSchema } = useAccountSchema('login')

  const { errors, handleSubmit, defineField } = useForm({
    validationSchema: accountSchema,
  })

  const [email, emailAttrs] = defineField('email')
  const [password, passwordAttrs] = defineField('password')

  return {
    errors,
    handleSubmit,
    email,
    emailAttrs,
    password,
    passwordAttrs,
  }
}
