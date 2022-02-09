import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Emma',
    doses: {
      breakfast: 12,
      lunch: 14,
      dinner: 14
    },
    correction: {
      over: 150,
      carbCount: 35
    },
    targetRange: {
      low: 70,
      high: 150
    }
  }),
  getters: {
    correctionMessage: (state) => `
      0.5 units for every ${state.correction.carbCount} over ${state.correction.over} 
    `,
  },
  actions: {
    updateDose: ({ meal, dose }) => state.doses[meal] = dose,
    updateCorrection: ({ over, carbCount }) => state.correction = { over, carbCount },
    updateTargetRange: ({ low, high }) => state.targetRange = { low, high },
    updateName: (name) => state.name = name
  }
})
