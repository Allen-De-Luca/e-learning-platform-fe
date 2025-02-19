import { reactive } from 'vue';

export const globalState = reactive({
  userId: null as number | null,
  contactId: null as number | null
});