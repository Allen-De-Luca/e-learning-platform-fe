<script setup lang="ts">
</script>

<template>
  <div class="card button-card">
    <div class="card-content has-text-centered">
      <span class="icon is-large">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.button-card {
  border: 2px dashed #ccc;
  cursor: pointer;
  transition: border-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-card {
  border-color: #3273dc;
}
</style>
