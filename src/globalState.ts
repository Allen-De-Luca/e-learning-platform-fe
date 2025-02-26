import { reactive } from 'vue';
import { Configuration } from '../frontend-api/configuration';

export const globalState = reactive({
  userId: null as number | null,
  configuration: null as Configuration | null
});