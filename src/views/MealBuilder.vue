<script setup>
import Header from '@/components/Header.vue'
import MealForm from '@/components/MealForm.vue'
import DosingInfo from '@/components/DosingInfo.vue';
import { useCalculationsStore } from '@/stores/calculations'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const calculations = useCalculationsStore()
const route = useRoute()
const router = useRouter()
const title = ref(route.params.meal)

function goHome() {
  calculations.$reset()
  router.push({ name: 'home' })
}
</script>

<template>
  <Header :title="title" />
  <DosingInfo v-if="calculations.showDoseResults" />
  <MealForm v-else />
  <div class="footer">
    <q-btn round color="dark" icon="cottage" @click="goHome" />
    <q-btn
      v-if="calculations.showDoseResults"
      color="primary"
      label="Back"
      size="lg"
      @click="calculations.hideResults"
    />
    <q-btn 
      v-else
      color="primary" 
      label="Calculate" 
      size="lg" 
      @click="calculations.showResults" 
      :disable="calculations.submitDisabled"
    />
  </div>
</template>

<style lang="sass">
.footer
  display: flex
  justify-content: space-between
  margin: 24px 0
</style>