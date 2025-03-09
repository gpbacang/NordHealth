import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { AccountData } from '@/types/Account'

export const useAccountStore = defineStore('account', () => {
  const account = ref<AccountData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    receiveUpdates: false,
  })

  const saveAccount = (data: AccountData) => {
    account.value = data
  }

  return {
    account,
    saveAccount,
  }
})
