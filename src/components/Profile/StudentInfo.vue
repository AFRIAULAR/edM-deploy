<template>
  <div class="student-info p-3 bg-white rounded" style="margin-top: 10px; padding: 15px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05); border-radius: 6px;">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div class="material-icons text-muted fs-4">drag_indicator</div>
        <div class="fw-bold ms-2">Student Information</div>
      </div>
      <div class="d-flex align-items-center">
        <div
          class="material-icons text-muted fs-4"
          @click="toggleCard"
        >{{ isExpanded ? 'expand_less' : 'expand_more' }}</div>
      </div>
    </div>
    <div v-if="isExpanded" class="mt-3">
      <div v-for="(info, label) in studentProfile.studentProfile.studentinfo" :key="label" class="student-info-text d-flex justify-content-between">
        <div class="fw-bold text-muted">{{ label }}:</div>
        <div class="text-muted">{{ info }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import studentProfile from '@/data/studentProfile.json';

export default {
  data() {
    return {
      isExpanded: true,
      studentProfile: studentProfile,
    };
  },
  methods: {
    toggleCard() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/profile/profile.scss';
</style>