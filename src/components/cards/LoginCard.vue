<script setup lang="ts">
import { ref } from 'vue';
import { ReminderControllerApi } from '../../../frontend-api/apis';
import { useRouter } from 'vue-router';
import type { User } from '../../../frontend-api/models';
import { globalState } from '@/globalState';

const router = useRouter();
const data = ref<User | null>(null);
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  if (username.value && password.value) {
    let apiClient = new ReminderControllerApi();
    data.value = await apiClient.authentication({
        authReq: 
        {
            username: username.value,
            password: password.value  
        }
    });
    if (data.value) {      
        errorMessage.value = '';
        globalState.userId = data.value.id?? null;
        globalState.contactId = data.value.contact?.id?? null;
        console.log(data.value);
        
        router.push('/customers');
    } else{
        errorMessage.value = 'Password or username are incorrect.';
    }
  }
};
</script>

<template>
  <main>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="handleSubmit">
            <div>
              <label class="subtitle is-5" for="username">Username:</label>
              <input class="input" 
                type="text" 
                id="username" 
                v-model="username" 
                placeholder="Enter your username" 
                required
              />
            </div>
            <div>
              <label class="subtitle is-5" for="password">Password:</label>
              <input class="input"
                type="password" 
                id="password" 
                v-model="password" 
                placeholder="Enter your password" 
                required
              />
            </div>
            <button class="button" type="submit">Login</button>

            <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
          </form>
        </div>
        
      </div>
    </div>
  </main>
</template>

<style scoped>

.card{
  width: 300px;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 5px;
}

input {
  padding: 8px;
  margin-top: 4px;
  width: 250px;
}

button {
  padding: 8px;
  margin-top: 10px;
  width: 100px;
  cursor: pointer;
}

button:hover {
  background-color: #007bff;
  color: white;
}
</style>
