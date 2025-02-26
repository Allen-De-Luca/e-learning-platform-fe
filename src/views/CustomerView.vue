<script setup lang="ts">
import CustomerCard from '@/components/cards/CustomerCard.vue';
import { ref, onMounted } from 'vue';
import type { Customer } from '../../frontend-api/api';
import { ReminderControllerApi } from '../../frontend-api/api';
import { globalState } from '@/globalState';

const customerData = ref<Customer[]>([]);
const userId: number = globalState.userId ?? 0;
let apiClient = new ReminderControllerApi(globalState.configuration!);

onMounted(async () => {
  customerData.value = (await apiClient.getAllCustomersByUserId(userId)).data;
});

</script>

<template>
  <main>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="customer in customerData" :key="customer.id">
          <CustomerCard class="card is-fullheight" :customer="customer" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container{
  padding-top: 3vw;
}
</style>