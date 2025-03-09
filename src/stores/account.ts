import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Account } from '@/types/Account'

export const useAccountStore = defineStore('account', () => {
  const account = ref<Account>()

  const saveAccount = (data: Account) => {
    account.value = data
  }

  return { account, saveAccount }
})
