<template>
  <div class="welcome">
    <container>
      WELCOME
    </container>
  </div>
</template>

<script>
if (process.client) {
  window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    navigator.serviceWorker.register('/pwa/sw.js')
  })
}
</script>

<style>
.welcome{
  justify-content: center;
  align-items: center;
}
</style>