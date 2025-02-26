<script setup lang="ts">
import { ref } from 'vue';
import { AuthControllerApi } from '../../../frontend-api/api';
import type { RegistrationReq } from '../../../frontend-api/api';

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
    let apiClient = new AuthControllerApi();
    const requestPayload: RegistrationReq = {
      username: formData.value.username,
      password: formData.value.password,
      firstName: formData.value.contactName,
      lastName: formData.value.contactLastName,
      email: formData.value.email
    };
    
    try {
      await apiClient.register(requestPayload);
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
                v-model="formData.username" 
                placeholder="Enter your username" 
                required
              />
            </div>
            <div>
              <label class="subtitle is-5" for="password">Password:</label>
              <input class="input"
                type="password" 
                id="password" 
                v-model="formData.password" 
                placeholder="Enter your password" 
                required
              />
            </div>
            <div>
              <label class="subtitle is-5" for="contactName">First Name:</label>
              <input class="input"
                type="text" 
                id="contactName" 
                v-model="formData.contactName" 
                placeholder="Enter your first name" 
                required
              />
            </div>
            <div>
              <label class="subtitle is-5" for="contactLastName">Last Name:</label>
              <input class="input"
                type="text" 
                id="contactLastName" 
                v-model="formData.contactLastName" 
                placeholder="Enter your last name" 
                required
              />
            </div>
            <div>
              <label class="subtitle is-5" for="email">Emails:</label>
              <div v-for="(email, index) in formData.email" :key="index" class="email-input-group">
                <input class="input"
                  type="email" 
                  v-model="formData.email[index]" 
                  placeholder="Enter an email address" 
                  required 
                />
                <button class="button is-light is-small"
                  type="button" 
                  v-if="formData.email.length > 1" 
                  @click="removeEmailField(index)"
                >
                  REMOVE
                </button>
              </div>
              <button class="button is-primary is-small" type="button" @click="addEmailField">ADD</button>
            </div>
            <button class="button" type="submit">Signin</button>

          </form>
        </div>
        
      </div>
    </div>
  </main>
</template>

<style scoped>

.card {
  width: 350px;
  max-width: 100%;
}

.email-input-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
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
  width: 300px;
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
