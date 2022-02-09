<script setup>
import { ref, onBeforeUpdate } from 'vue'
const props = defineProps(['title'])

const headerClass = ref(getHeaderClass())

function getHeaderClass() {
  const classes = ['ellipsis'];
  switch (props.title) {
    case 'lunch':
      classes.push('header-secondary')
      break
    case 'dinner':
      classes.push('header-accent')
      break
    case 'dose':
    case 'breakfast':
    default:
      classes.push('header-primary')
  }
  return classes.join(' ')
}

onBeforeUpdate(() => {
  headerClass.value = getHeaderClass()
})
</script>

<template>
  <header :class="headerClass">
    <h1 class="title text-uppercase ellipsis">{{ title }}</h1>
  </header>
</template>

<style lang="sass">
header
  text-align: center
  border-bottom: 1px solid
  width: 100%

.header-primary
  color: $primary
.header-secondary
  color: $secondary
.header-accent
  color: $accent

.title
  margin-top: 24px
  margin-bottom: 24px
</style>