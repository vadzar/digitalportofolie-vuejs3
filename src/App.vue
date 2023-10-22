<template>
  <RouterView :key="$route.path"
    v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"/>
      </transition>
  </RouterView>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
