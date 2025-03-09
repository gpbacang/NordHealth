import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useNotification } from './notification'

import type { AccountData } from '@/types/Account'

export const useAccountStore = defineStore('account', () => {
  const router = useRouter()
  const notificationStore = useNotification()

  const account = ref<AccountData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    receiveUpdates: false,
  })

  const saveAccount = (data: AccountData) => {
    try {
      account.value = data
      notificationStore.$state.showNotification = true
      router.push({ name: 'account' })
      notificationStore.$state.message = 'Account successfully saved'
      notificationStore.$state.variant = 'default'
    } catch {
      notificationStore.$state.message = 'Failed to save account'
      notificationStore.$state.variant = 'danger'
    }
  }

  return {
    account,
    saveAccount,
  }
})
