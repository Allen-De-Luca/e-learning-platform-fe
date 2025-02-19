<script setup lang="ts">
import Calendar from '@/components/widgets/Calendar.vue';
import { onMounted, ref } from 'vue';
import type { EventListRsp } from '../../frontend-api/models';
import { globalState } from '@/globalState';
import { ReminderControllerApi } from '../../frontend-api/apis';

const eventRsp = ref<EventListRsp>();
const userId: number = globalState.userId?? 0;
let apiClient = new ReminderControllerApi();

onMounted(async () => {
  eventRsp.value = await apiClient.getEventsByUserId({ userId: userId });
});
</script>

<template>
  <main>
    <Calendar v-if="eventRsp" :events="[...eventRsp.evAppointment, ...eventRsp.evReminder]"/>
  </main>
</template>
