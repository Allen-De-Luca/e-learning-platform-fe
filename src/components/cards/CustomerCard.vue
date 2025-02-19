<script setup lang="ts">
import AppointmentsListModal from '@/components/modals/AppointmentsListModal.vue';
import { defineProps, ref } from 'vue';
import type { Appointment, Customer } from '../../../frontend-api/models';
import { ReminderControllerApi } from '../../../frontend-api/apis';

const props = defineProps<{
  customer: Customer;
}>();

let apiClient = new ReminderControllerApi();
const selectedCustomerAppointments = ref<Appointment[]>([]);
const showModal = ref(false)

const fetchCustomerAppointments = async (id: number) => {
  selectedCustomerAppointments.value = await apiClient.getAllAppointmentByCustomerId({ customerId: id });
  showModal.value = true;
}

</script>

<template>
<div class="card">
      <h2>Customer Details</h2>
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
      <button id="show-modal" @click="fetchCustomerAppointments(customer.id!)">Apri appuntamenti</button>
    </div>
  <Teleport to="body">
    <AppointmentsListModal v-if="selectedCustomerAppointments" :appointments="selectedCustomerAppointments" :show="showModal" @close="showModal = false">
      <template #header>
        <h3></h3>
      </template>
    </AppointmentsListModal>
  </Teleport>
</template>