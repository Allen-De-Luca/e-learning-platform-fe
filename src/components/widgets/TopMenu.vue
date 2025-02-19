<script setup lang="ts">
import { globalState } from '@/globalState';
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter(); 

function logout(){
  globalState.userId = null; 
  globalState.contactId = null; 
  router.push('/login');
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink v-if="globalState.userId == null" to="/login">Log-in</RouterLink>
        <RouterLink v-if="globalState.userId == null" to="/signin">Sign-in</RouterLink>
        <RouterLink v-if="globalState.userId != null" to="/customers">Customers</RouterLink>
        <RouterLink v-if="globalState.userId != null" to="/calendar">Calendar</RouterLink>
        <button v-if="globalState.userId != null" @click = "logout()">Log out</button>
      </nav>
    </div>
  </header>
</template>

<style>

nav {
  display: flex;
  gap: 10px;
}

RouterLink {
  text-decoration: none;
}

a,
button,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
  font-size: 20px;
  background: none;
  border: none;
}

@media (hover: hover) {
  a:hover, button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

</style>
