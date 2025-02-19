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
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          v-model="username" 
          placeholder="Enter your username" 
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="Enter your password" 
          required
        />
      </div>
      <button type="submit">Submit</button>

      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </form>
  </main>
</template>

<style scoped>
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
