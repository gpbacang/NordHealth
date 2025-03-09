<script setup lang="ts">
import { computed } from 'vue'

import AccountForm from '@/components/AccountForm.vue'
import { useAccountStore } from '@/stores/account'

const accountStore = useAccountStore()

const userName = computed(
  () => `${accountStore.account.firstName} ${accountStore.account.lastName}`,
)
const email = computed(() => accountStore.account.email)
const isSubscribed = computed(() => accountStore.account.receiveUpdates)
</script>
<template>
  <provet-card class="w-full md:w-1/2">
    <section class="h-full relative">
      <div class="w-full n-border-radius h-24 n-color-status-highlight"></div>
      <provet-avatar
        name="Laura Williams"
        size="xxxl"
        class="translate-x-full md:translate-x-1/4 -translate-y-2/3 p-1 n-border-radius-circle bg-white"
      ></provet-avatar>
      <div class="-translate-y-14">
        <div
          class="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between"
        >
          <div>
            <h2 class="n-typescale-xxl">{{ userName }}</h2>
            <h5 class="n-typescale-m">{{ email }}</h5>
          </div>
          <provet-badge :variant="isSubscribed ? 'success' : ''" class="mt-4 md:mt-0">{{
            isSubscribed ? 'Subscribed' : 'Not subscribed'
          }}</provet-badge>
        </div>

        <div class="mt-10">
          <AccountForm />
        </div>
      </div>
    </section>
  </provet-card>
</template>
