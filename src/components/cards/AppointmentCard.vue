<script setup lang="ts">
import type { PropType } from 'vue';
import type { Appointment } from '../../../frontend-api/api';

const props = defineProps({
  appointment: Object as PropType<Appointment>
})
console.log(new Date(props.appointment?.appointmentDate!));

</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p class="subtitle is-4">Appointment date:</p>
        <p class="subtitle is-5">
          {{
              appointment?.appointmentDate
              ? new Date(
                  +appointment.appointmentDate[0],
                  +appointment.appointmentDate[1] -1 ,
                  +appointment.appointmentDate[2],
                  +appointment.appointmentDate[3],
                  +appointment.appointmentDate[4]
                )
                  .toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric', minute: 'numeric' })
              : ''
          }}
        </p>
        <p class="subtitle is-4">Reminder date:</p>
        <p class="subtitle is-5">
          {{ 
            appointment?.reminderDate ? 
            new Date(
                  +appointment.reminderDate[0],
                  +appointment.reminderDate[1] -1 ,
                  +appointment.reminderDate[2]
                )
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