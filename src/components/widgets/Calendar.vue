<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const props = defineProps<{
  events: any;
}>();

let calendarOptions = {
            plugins: [ dayGridPlugin, interactionPlugin ],
            events: props.events,
            initialView: 'dayGridMonth'
          }
</script>
<template>
  <FullCalendar v-if="calendarOptions" :options="calendarOptions" />
</template>