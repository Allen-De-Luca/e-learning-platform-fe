<script setup lang="ts">
import CustomerCard from '@/components/cards/CustomerCard.vue';
import { ref, onMounted } from 'vue';
import type { Customer } from '../../frontend-api/models';
import { ReminderControllerApi } from '../../frontend-api/apis';
import { globalState } from '@/globalState';

const customerData = ref<Customer[]>([]);
const userId: number = globalState.userId ?? 0;
let apiClient = new ReminderControllerApi();

onMounted(async () => {
  customerData.value = await apiClient.getAllCustomersByUserId({ userId: userId });
});

</script>

<template>
  <main>
    <div v-for="customer in customerData" :key="customer.id">
      <CustomerCard :customer="customer" />
    </div>
  </main>
</template>
