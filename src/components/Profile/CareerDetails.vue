<template>
  <div class="career-details p-3 rounded mt-2" :style="{ backgroundColor: backgroundColor, height: isExpanded ? 'auto' : '373px' }">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center">
        <div class="material-icons text-muted fs-4">drag_indicator</div>
        <div class="fw-bold ms-2">Career Details</div>
      </div>
      <div class="d-flex align-items-center">
        <div @click="toggleDropdown" style="cursor: pointer;">
          <i class="material-icons">
            {{ isExpanded ? 'expand_more' : 'expand_less' }}
          </i>
        </div>
      </div>
    </div>
    <div v-if="showDropdown" class="d-flex flex-column gap-3">
      <div class="d-flex flex-column">
        <div class="fw-bold text-muted" style="font-size: 12px;">Career Name:</div>
        <div class="d-flex align-items-center bg-white rounded border border-secondary px-3" @click="toggleDetails">
          <div class="fw-bold" style="font-size: 12px;">{{ selectedCareer ? selectedCareer.name : '' }}</div>
          <div style="font-size: 16px; cursor: pointer; margin-left: auto;">
            <i class="material-icons">
              {{ isExpanded ? 'expand_less' : 'expand_more' }}
            </i>
          </div>
        </div>
        <div v-if="isExpanded">      
          <div>{{ selectedCareer.name }} Details</div>
          <div v-if="selectedCareer.careerID">Career ID: {{ selectedCareer.careerID }}</div>
          <div v-if="selectedCareer.type">Type: {{ selectedCareer.type }}</div>
          <div v-if="selectedCareer.modality">Modality: {{ selectedCareer.modality }}</div>
          <div v-if="selectedCareer.status">Status: {{ selectedCareer.status }}</div>
          <div v-if="selectedCareer.studentID">Student ID: {{ selectedCareer.studentID }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import studentProfile from "@/data/studentProfile.json";

export default {
  data() {
    return {
      backgroundColor: '#ffffff',
      showDropdown: false,
      selectedCareer: null,
      isExpanded: true,
      studentProfile: studentProfile,
    };
  },
  mounted() {
    this.selectedCareer = this.studentProfile.studentProfile.careerdetails.careers.find(career => career.name === 'Software Engineering');
  },
  
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      if (!this.showDropdown) {
        this.isExpanded = true;
      }
    },
    toggleDetails() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
</style>
