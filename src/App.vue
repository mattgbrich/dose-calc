<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
<div class="main-container">
  <RouterView />
</div>
</template>

<style lang="sass">
#app
  max-width: 1280px
  margin: 0 auto
  padding: 8px
  font-weight: normal
  display: flex
  justify-content: center

.main-container
  border: 1px solid $secondary
  width: 100%
  padding: 0 8px

@media (min-width: $breakpoint-md-min)
  #app
    padding: 2rem
  .main-container
    width: 50%
    padding: 0 24px
</style>
