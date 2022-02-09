<script setup>
import { useRouter } from 'vue-router'
import { useCalculationsStore } from '@/stores/calculations';
import Header from '@/components/Header.vue'

const router = useRouter()
const calculations = useCalculationsStore()

function goToMeal(meal) {
  calculations.updateMeal(meal)
  router.push({ name: 'meal', params: { meal }})
}
</script>

<template>
  <Header title="dose" />
  <div class="btn-container">
    <q-btn 
      class="meal-btn"
      color="primary" 
      label="BREAKFAST" 
      size="xl"
      @click="goToMeal('breakfast')"
    />
    <q-btn 
      class="meal-btn"
      color="secondary" 
      label="LUNCH" 
      size="xl" 
      @click="goToMeal('lunch')"
    />
    <q-btn 
      class="meal-btn"
      color="accent" 
      label="DINNER" 
      size="xl" 
      @click="goToMeal('dinner')"
    />
  </div>
</template>

<style lang="sass">
.btn-container
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: 36px

.meal-btn
  width: 100%
  margin-top: 36px

@media (min-width: $breakpoint-md-min)
  .meal-btn
    width: 75%
</style>