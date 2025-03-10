<script setup lang="ts">
import AppointmentsListModal from '@/components/modals/AppointmentsListModal.vue';
import { defineProps, inject, provide, ref } from 'vue';
import { type Customer } from '../../../frontend-api/api';

const props = defineProps<{
  customer: Customer;
}>();

const customerId = ref<number | null>(props.customer?.id!);
provide('customerId', customerId);

const showModal = ref(false)

const fetchCustomerAppointments = async (id: number) => {
  customerId.value = id;
  showModal.value = true;
}

function getModalTitle(customer: Customer){
  return customer.company + ' - ' + customer.lastName;
}

</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h2>{{ customer.company }} - {{ customer.lastName }}</h2>
        <div>
          <strong>Full Name:</strong>
          <p>{{ customer.firstName }} {{ customer.lastName }}</p>
        </div>

        <div v-if="customer.company">
          <strong>Company:</strong>
          <p>{{ customer.company }}</p>
        </div>

        <div v-if="customer.phoneNumber">
          <strong>Phone Number:</strong>
          <p>{{ customer.phoneNumber }}</p>
        </div>

        <div v-if="customer.vatNumber">
          <strong>VAT Number:</strong>
          <p>{{ customer.vatNumber }}</p>
        </div>

        <div v-if="customer.emails?.length">
          <strong>Emails:</strong>
          <ul>
            <li v-for="(email, index) in customer.emails" :key="index">{{ email }}</li>
          </ul>
        </div>
        <br>
        <button class="button" @click="fetchCustomerAppointments(customer.id!)">Show appointments</button>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <AppointmentsListModal :customerName="getModalTitle(customer)" :show="showModal" @close="showModal = false">
    </AppointmentsListModal>
  </Teleport>
</template>

<style scoped>
.card{
  width: 400px;
}
</style>