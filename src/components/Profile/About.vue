<template>
  <div class="about-container bg-white rounded p-3 mt-2">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div class="material-icons text-muted fs-4">drag_indicator</div>
        <div class="fw-bold ms-2 title-text">About</div>
      </div>
      <div class="d-flex align-items-center">
        <div
          class="text-muted fs-4 material-icons" 
          :class="{ 'rotate-up': isExpanded, 'rotate-down': !isExpanded }" 
          @click="toggleCard"
        > expand_more 
        </div>
      </div>
    </div>
    <div v-if="isExpanded" class="about-content mt-3">
      <div class="d-flex flex-column">
        <div v-for="(value, key) in aboutInfo.studentProfile.aboutinfo" :key="key" class="info-item">
          <div class="fw-bold text-muted">{{ key }}:</div>
          <div class="text-muted">{{ value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutInfo from "../../data/studentProfile.json"; 

export default {
  data() {
    return {
      isExpanded: true,
      aboutInfo: aboutInfo
    };
  },
  methods: {
    toggleCard() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped>
.rotate-up {
  transform: rotate(180deg); 
}
.rotate-down {
  transform: rotate(0deg);
}
</style>
