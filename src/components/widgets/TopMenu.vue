<script setup lang="ts">
import { globalState } from '@/globalState';
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter(); 

function logout(){
  globalState.userId = null; 
  globalState.configuration = null; 
  router.push('/login');
}
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/login">
      <img class="logo" src="..\..\assets\site-icon.svg" alt="logo"/>
      <p>
        <span class="logo-text" style="color: black;">RAD</span>
        <span class="logo-text" style="color: red;">minder</span>
      </p>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
      <RouterLink class="navbar-item" v-if="globalState.userId != null" to="/customers">Customers</RouterLink>
      <RouterLink class="navbar-item" v-if="globalState.userId != null" to="/calendar">Calendar</RouterLink>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <RouterLink class="button is-primary" v-if="globalState.userId == null" to="/signin">Sign-in</RouterLink>
          <RouterLink class="button is-light" v-if="globalState.userId == null" to="/login">Log-in</RouterLink>
          <button class="button is-light" v-if="globalState.userId != null" @click = "logout()">Log out</button>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
.logo-text{
  font-family: 'Boyfriend Regular', sans-serif;
  font-weight: bolder;
  font-size: 1.5rem;
}

.logo{
  width: 100%;
  height: 100%;
}
</style>