<script setup lang="ts">
import { computed } from 'vue'

import AccountForm from '@/components/AccountForm.vue'
import { useAccountStore } from '@/stores/account'

const { account } = useAccountStore()

const userName = computed(() => `${account.firstName} ${account.lastName}`)
const email = computed(() => account.email)
</script>
<template>
  <div class="n-padding-xxl">
    <provet-card class="100vh">
      <section class="h-full relative">
        <div class="w-full n-border-radius h-24 n-color-status-highlight"></div>
        <provet-avatar
          name="Laura Williams"
          size="xxxl"
          class="translate-x-1/4 -translate-y-2/3 p-1 n-border-radius-circle bg-white"
        ></provet-avatar>
        <div class="-translate-y-14">
          <div class="flex items-center justify-between">
            <h2 class="n-typescale-xxl">{{ userName }}</h2>
            <provet-badge variant="success">Subscribed</provet-badge>
          </div>

          <h5 class="n-typescale-m">{{ email }}</h5>

          <div class="mt-10">
            <AccountForm />
          </div>
        </div>
      </section>
    </provet-card>
  </div>
</template>
