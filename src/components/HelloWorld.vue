<script setup lang="ts">
import { ref } from "vue";
import { CustomerControllerApi } from "../../frontend-api/apis";

const apiClient = new CustomerControllerApi();
const idInput = ref<number | null>(null);
const data = ref<number | null>(null);

const fetchData = async () => {
  try {
    if (idInput.value !== null) {
      //data.value = await apiClient.addCustomer({ id: idInput.value });
    }
  } catch (error) {
    console.error("API call failed:", error);
  }
};
</script>

<template>
  <div>
    <h1>API Response</h1>
    <div>
      <input
        v-model="idInput"
        type="number"
        placeholder="Enter ID"
      />
      <button @click="fetchData">Fetch Data</button>
    </div>

    <pre v-if="data !== null">{{ data }}</pre>
    <p v-else>No data yet</p>
  </div>
</template>
