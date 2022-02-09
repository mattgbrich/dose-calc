import { defineStore } from 'pinia';
import { useUserStore } from './user';

export const useCalculationsStore = defineStore({
  id: 'calculations',
  state: () => ({
    carbs: null,
    bloodSugar: null,
    meal: '',
    showDoseResults: false,

  }),
  getters: {
    calculateDose(state) {
      if (!state.carbs || !state.bloodSugar || state.carbs < 0 || state.bloodSugar < 0) return;
      const user = useUserStore()
      const round = this.roundBy(user.targetRange);
      const mainDose = round(state.carbs / user.doses[state.meal]) * 0.5;
      const correction = round(this.calculateCorrection(user.correction)) * 0.5;
      const dose = mainDose + correction;
      const timeToWait = round(state.bloodSugar / 10);
      return {
        mainDose,
        correction,
        dose,
        timeToWait
      };
    },
    calculateCorrection(state) {
      return (correction) => {
        const numCorrections = (state.bloodSugar - correction.over) / correction.carbCount;
        return state.bloodSugar > correction.over ? numCorrections : 0;
      }
    },
    roundBy(state) {
      return (targetRange) => (
        state.bloodSugar > targetRange.high ? Math.ceil : Math.floor
      );
    },
    submitDisabled(state) {
      const disabled = !(
        state.carbs &&
        state.bloodSugar &&
        state.carbs > 0 &&
        state.bloodSugar > 0 &&
        state.meal.length
      );
      return disabled;
    }
  },
  actions: {
    updateCarbs(carbs) {
      this.$patch({ carbs });
    },
    updateBloodSugar(bloodSugar) {
      this.$patch({ bloodSugar });
    },
    updateMeal(meal) {
      this.$patch({ meal });
    },
    showResults() {
      this.$patch({ showDoseResults: true });
    },
    hideResults() {
      this.$patch({ showDoseResults: false });
    }
  }
});
