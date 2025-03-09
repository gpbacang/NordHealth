import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotification = defineStore('notification', () => {
  const message = ref('')
  const showNotification = ref(false)
  const variant = ref<'default' | 'danger'>('default')

  return {
    message,
    showNotification,
    variant,
  }
})
