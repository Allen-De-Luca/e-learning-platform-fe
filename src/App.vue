<script setup lang="ts">
import TopMenu from './components/widgets/TopMenu.vue'
</script>

<template>
  <main>
    <TopMenu class="top-menu"/>
    <router-view class="view"/>
  </main>
</template>

<style scoped>
  main {
    display: grid;
    grid-template-rows: auto 1fr; /* auto for TopMenu, 1fr for the view */
    height: 100vh; /* Make the main element occupy full viewport height */
  }

  .top-menu {
    border: 1px solid red;
    padding: 10px;
    /* Optional: You can set a fixed height for the top menu if you prefer */
  }

  .view {
    border: 1px solid blue;
    padding: 10px;
    /* The view will take the remaining space (1fr) */
    overflow: auto; /* Optional: Makes sure content inside router-view scrolls if too large */
  }
</style>
