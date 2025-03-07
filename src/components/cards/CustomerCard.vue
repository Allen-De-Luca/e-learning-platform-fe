<script setup lang="ts">
import AppointmentsListModal from '@/components/modals/AppointmentsListModal.vue';
import { defineProps, ref } from 'vue';
import { ReminderControllerApi, type Appointment, type Customer } from '../../../frontend-api/api';
import { globalState } from '@/globalState';

const props = defineProps<{
  customer: Customer;
}>();

let apiClient = new ReminderControllerApi(globalState.configuration!);
const selectedCustomerAppointments = ref<Appointment[]>([]);
const showModal = ref(false)

const fetchCustomerAppointments = async (id: number) => {
  selectedCustomerAppointments.value = (await apiClient.getAllAppointmentByCustomerId(id)).data;
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
    <AppointmentsListModal :appointments="selectedCustomerAppointments" :customerId="customer.id" :customerName="getModalTitle(customer)" :show="showModal" @close="showModal = false">
    </AppointmentsListModal>
  </Teleport>
</template>

<style scoped>
.card{
  width: 400px;
}
</style>