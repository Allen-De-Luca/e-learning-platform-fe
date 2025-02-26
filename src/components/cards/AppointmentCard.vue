<script setup lang="ts">
import type { PropType } from 'vue';
import type { Appointment } from '../../../frontend-api/api';

const props = defineProps({
  appointment: Object as PropType<Appointment>
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p class="subtitle is-4">Appointment date:</p>
        <p class="subtitle is-5">
          {{ 
            appointment?.appointmentDate ? 
            new Date(appointment.appointmentDate)
            .toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: '2-digit' }) 
            : '' 
          }}
        </p>
        <p class="subtitle is-4">Reminder date:</p>
        <p class="subtitle is-5">
          {{ 
            appointment?.reminderDate ? 
            new Date(appointment.reminderDate)
            .toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: '2-digit' }) 
            : '' 
          }}
        </p>
      </div>
    </div>
  </div>  
</template>

<style scoped>

</style>