<script setup>
import { useCalculationsStore } from '@/stores/calculations'

const calculations = useCalculationsStore()

function updateCarbs(value) {
  calculations.updateCarbs(value)
}
function updateBloodSugar(value) {
  calculations.updateBloodSugar(value)
}

</script>

<template>
<div class="meal-form-container">
  <q-input 
    :model-value="calculations.carbs" 
    @update:model-value="updateCarbs"
    label="Carbs" 
    mask="####" 
    class="meal-data-input" 
  />
  <q-input 
    :model-value="calculations.bloodSugar" 
    @update:model-value="updateBloodSugar"
    label="Blood Sugar" 
    mask="####" 
    class="meal-data-input" 
  />
</div>
</template>

<style lang="sass">
.meal-form-container
  display: flex
  flex-direction: column

.meal-data-input
  width: 100%
  margin-top: 16px

@media (min-width: $breakpoint-md-min)
  .meal-form-container
    flex-direction: row 
    justify-content: space-between

  .meal-data-input
    width: 45%
</style>