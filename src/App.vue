<script setup lang="ts">
import TopMenu from './components/widgets/TopMenu.vue'
</script>

<template>
  <main class="has-background-light">
    <TopMenu class="top-menu"/>
    <router-view class="view"/>
  </main>
</template>

<style scoped>
  main {
    display: grid;
    grid-template-rows: auto 1fr;
    height:100vh;
  }

  .top-menu{
    box-shadow: 0px 3px 10px lightgrey
  }

  .view {
    padding: 10px;
    overflow: auto;
  }
</style>
