<script setup lang="ts">
import type { PropType } from 'vue';
import type { Appointment } from '../../../frontend-api/models';

const props = defineProps({
  appointment: Object as PropType<Appointment>
})
</script>

<template>
  <div>
    <h3>Appointment date:</h3>
    <p>{{ appointment?.appointmentDate }}</p>
    <h3>Reminder date:</h3>
    <p>{{ appointment?.reminderDate }}</p>
  </div>
</template>