<script setup lang="ts">
import Calendar from '@/components/widgets/Calendar.vue';
import { onMounted, ref } from 'vue';
import type { EventListRsp } from '../../frontend-api/api';
import { globalState } from '@/globalState';
import { ReminderControllerApi } from '../../frontend-api/api';

const eventRsp = ref<EventListRsp>();
const userId: number = globalState.userId?? 0;
let apiClient = new ReminderControllerApi(globalState.configuration!);

onMounted(async () => {
  eventRsp.value = (await apiClient.getEventsByUserId( userId )).data;
});
</script>

<template>
  <main>
    <Calendar v-if="eventRsp" :events="[...eventRsp.evAppointment, ...eventRsp.evReminder]"/>
  </main>
</template>
