<script setup lang="ts">
import { ref } from 'vue';

const appointmentDate = ref('');
const reminderDate = ref('');
const notes = ref('');
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p class="subtitle is-4">New Appointment</p>
        <input type="datetime-local" v-model="appointmentDate" class="input" />
        <p class="subtitle is-4">Reminder</p>
        <input type="date" v-model="reminderDate" class="input" />
        <p class="subtitle is-4">Notes</p>
        <textarea v-model="notes" class="textarea"></textarea>
      </div>
    </div>
  </div>
</template>