<script setup lang="ts">
import type { PropType } from 'vue';
import AppointmentCard from '@/components/cards/AppointmentCard.vue';
import type { Appointment } from '../../../frontend-api/api';

const props = defineProps({
  show: Boolean,
  customerName: String,
  appointments: Array as PropType<Appointment[]>
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container has-background-light">
        <div class="modal-header has-background-light">
          <p class="subtitle is-4">{{ customerName }}</p>
        </div>
        <div class="modal-body has-background-light">
            <AppointmentCard 
            v-for="(appointment, index) in appointments" 
            :key="index" 
            :appointment="appointment" 
            >
            </AppointmentCard>
        </div>
        <div class="modal-footer has-background-light">
          <slot name="footer">
            <button class="button"
              @click="$emit('close')"
            >Cancel</button>
            <button
              class="button is-primary modal-default-button"
              @click="$emit('close')"
            >Save</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 350px; /* Adjust width as needed */
  max-height: 80vh; /* Ensures the modal does not exceed viewport height */
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column; /* Ensures proper structure for scrolling */
}

.modal-body {
  flex: 1; /* Takes up remaining space */
  overflow-y: auto; /* Enables scrolling */
  max-height: 70vh; /* Restricts the modal body height */
  padding: 10px; /* Avoids scrollbar overlapping content */
  padding-left: 0px;
}


.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>