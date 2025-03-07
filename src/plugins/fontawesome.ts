import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { App } from 'vue';

library.add(faPlus);

export default {
  install(app: App) {
    app.component('font-awesome-icon', FontAwesomeIcon);
  }
};
