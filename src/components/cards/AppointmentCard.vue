<script setup lang="ts">
import { inject, ref, type PropType, type Ref } from 'vue';
import { ReminderControllerApi, type Appointment } from '../../../frontend-api/api';
import { globalState } from '@/globalState';

const props = defineProps({
  appointment: Object as PropType<Appointment>
})

const emit = defineEmits<{
  (e: 'remove', id: number): void;
}>();

const handleRemove = () => {
  if(props.appointment?.id && props.appointment.id != 0){
    apiClient.deleteAppointment(props.appointment?.id!);
  }
  emit('remove', props.appointment?.id!);
};

let apiClient = new ReminderControllerApi(globalState.configuration!);

var notes = ref(props.appointment?.notes);
var id = ref(props.appointment?.id);
const customerId = inject<Ref<number | null>>('customerId');
const appointmentDate = ref(props.appointment?.appointmentDate);
const reminderDate = ref(props.appointment?.reminderDate);
const editMode = ref(false);

const saveAppointment = () => {
  let appReq: any= {
    customerId: customerId?.value,
    contactId: globalState.contactId!,
    appId: id.value,
    appointmentDate: appointmentDate.value,
    reminderDate: reminderDate.value,
    notes: notes.value
  }
  apiClient.saveAppointment(appReq)
  editMode.value = false;
};

const cancelEdit = () => {
  notes = ref(props.appointment?.notes);
  editMode.value = false;
};
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <button class="delete is-large" style="float: right;" @click="handleRemove"></button>
        <p class="subtitle is-4">Appointment date:</p>
        <p class="subtitle is-5" v-if="!editMode">
          {{
              appointmentDate? new Date(appointmentDate)
              .toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric', minute: 'numeric' })
              :''
          }}
        </p>
        <input type="datetime-local" v-model="appointmentDate" class="input" v-if="editMode"/>
        <p class="subtitle is-4">Reminder date:</p>
        <p class="subtitle is-5" v-if="!editMode">
          {{ 
            reminderDate ? 
            new Date(
              reminderDate
                )
            .toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: '2-digit' }) 
            : '' 
          }}
        </p>
        <input type="date" v-model="reminderDate" class="input" v-if="editMode"/>
        <p class="subtitle is-4">Notes:</p>
        <div>
        <!-- Display mode -->
        <div v-if="!editMode">
          <p>{{ notes }}</p>
          <button class="button is-small" @click="editMode = true">Edit</button>
        </div>

        <!-- Edit mode -->
        <div v-else>
          <textarea class="textarea" v-model="notes"></textarea>
          <br />
          <button class="button is-primary is-small" @click="saveAppointment">Save</button>
          <button class="button is-light is-small" @click="cancelEdit">Cancel</button>
        </div>
      </div>
      </div>
    </div>
  </div>  
</template>

<style scoped>

</style>