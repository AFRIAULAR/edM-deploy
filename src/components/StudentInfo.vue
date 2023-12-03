<template>
  <div class="student-info p-3 bg-white rounded" style="margin-top: 10px; padding: 15px;box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05); border-radius: 6px; ">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div class="text-muted fs-4 "></div>
        <div class="fw-bold ms-2">Student Information</div>
      </div>
      <div class="d-flex align-items-center">
        <div
          class="text-muted fs-4"
          :class="{ 'fas fa-chevron-up': isExpanded, 'fas fa-chevron-down': !isExpanded }"
          @click="toggleCard"
        ></div>
      </div>
    </div>
    <div v-if="isExpanded" class="mt-3">
      <div v-for="(info, label) in studentInfo" :key="label" class="d-flex justify-content-between">
        <div class="fw-bold text-muted">{{ label }}:</div>
        <div class="text-muted">{{ info }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import studentInfo from '@/data/studentInfo.json'

export default {
  data() {
    return {
      isExpanded: true,
      studentInfo: studentInfo 
    };
  },
  methods: {
    toggleCard() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style>
  .student-info{
    width: 330px;
  }
</style>
