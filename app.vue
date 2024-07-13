<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = "default";
</script>
<template>
  <div class="app-container">
    <AppHeader />
      <NuxtPage/>
    <AppFooter/>
  </div>
</template>
<style>
html, body {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

NuxtLayout {
  flex: 1; /* This makes the NuxtLayout take up the remaining space */
}

footer {
  margin-top: auto; /* This pushes the footer to the bottom */
}
</style>