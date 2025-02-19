<script setup lang="ts">
import { ref } from 'vue';
import { ReminderControllerApi } from '../../../frontend-api/apis';
import type { RegistrationReq } from '../../../frontend-api/models';

const formData = ref({
  username: '',
  password: '',
  contactName: '',
  contactLastName: '',
  email: ['']
});

const addEmailField = () => {
  formData.value.email.push('');
};

const removeEmailField = (index: number) => {
  if (formData.value.email.length > 1) {
    formData.value.email.splice(index, 1);
  }
};

const handleSubmit = async () => {
  if (formData.value.username && formData.value.password && formData.value.contactName && formData.value.contactLastName && formData.value.email.length > 0) {
    let apiClient = new ReminderControllerApi();
    const requestPayload: RegistrationReq = {
      username: formData.value.username,
      password: formData.value.password,
      firstName: formData.value.contactName,
      lastName: formData.value.contactLastName,
      email: formData.value.email
    };
    
    try {
      await apiClient.addUser({registrationReq: requestPayload});
      alert("User added successfully!");
    } catch (error) {
      alert("Failed to add user");
    }
  } else {
    alert("All fields are required.");
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username:</label>
      <input 
        type="text" 
        id="username" 
        v-model="formData.username" 
        placeholder="Enter your username" 
        required 
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        v-model="formData.password" 
        placeholder="Enter your password" 
        required 
      />
    </div>

    <div>
      <label for="contactName">First Name:</label>
      <input 
        type="text" 
        id="contactName" 
        v-model="formData.contactName" 
        placeholder="Enter your contact name" 
        required 
      />
    </div>

    <div>
      <label for="contactLastName">Last Name:</label>
      <input 
        type="text" 
        id="contactLastName" 
        v-model="formData.contactLastName" 
        placeholder="Enter your contact last name" 
        required 
      />
    </div>

    <div>
      <label for="email">Emails:</label>
      <div v-for="(email, index) in formData.email" :key="index" class="email-input-group">
        <input 
          type="email" 
          v-model="formData.email[index]" 
          placeholder="Enter an email address" 
          required 
        />
        <button 
          type="button" 
          v-if="formData.email.length > 1" 
          @click="removeEmailField(index)"
        >
          -
        </button>
      </div>
      <button type="button" @click="addEmailField">+</button>
    </div>

    <button type="submit">Submit</button>
  </form>
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
