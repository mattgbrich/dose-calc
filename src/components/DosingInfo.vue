<script setup>
import { useCalculationsStore } from '@/stores/calculations'

const calculations = useCalculationsStore();

</script>

<template>
<h3 class="dose-info-title">Dosing Information</h3>
<div class="dose-info-container">
  <div class="dose-info-label">Dose for Carbs:</div>
  <div class="dose-info-value">{{ calculations.calculateDose.mainDose }}</div>
</div>
<div class="dose-info-container">
  <div class="dose-info-label">Correction:</div>
  <div class="dose-info-value">{{ calculations.calculateDose.correction }}</div>
</div>
<div class="dose-info-container total">
  <div class="dose-info-label">Total Dose:</div>
  <div class="dose-info-value">{{ calculations.calculateDose.dose }}</div>
</div>
<h6 class="wait-msg">
  Wait 
  <span class="time-to-wait">{{calculations.calculateDose.timeToWait}} </span>
  minutes after dosing before eating
</h6>
</template>

<style lang="sass">
.dose-info-title
  margin: 24px 0
  color: $accent
  border-bottom: 1px solid
  text-align: left

.dose-info-container
  display: flex
  justify-content: center
  font-weight: 600
  font-size: 1.5rem
  color: $secondary
  padding-left: 5px

.dose-info-label
  width: 50%
  text-align: right
  padding-right: 8px 

.dose-info-value
  width: 50%
  padding-left: 8px

.total
  font-weight: 900 !important
  font-size: 1.8rem !important
  text-decoration: underline
  color: $accent !important

.wait-msg
  text-align: left
  color: $secondary
  margin-top: 24px

.time-to-wait
  font-weight: 600
  font-size: 1.5rem
  text-decoration: underline
  color: $accent !important

@media (min-width: $breakpoint-md-min)
  .wait-msg
    text-align: center
  .dose-info-title
    text-align: center
  .dose-info-container
    padding-left: 0
</style>