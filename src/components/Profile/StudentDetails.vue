<template>
  <div class="student-details bg-white rounded p-4">
    <div class="d-flex flex-column gap-3">
      <div class="d-flex align-items-center gap-3">
        <img
          class="rounded-circle"
          style="width: 65px; height: 65px;"
          src="../../assets/img/student-img.png"
          alt="Student Image"
        />
        <div class="d-flex flex-column">
          <div class="fw-bold">{{ fullName }}</div>
          <div>Reg. ID: {{ studentID }}</div>
        </div>
      </div>
      <div>
        <div>Status: Active</div>
        <div class="d-flex justify-content-between">
          <div
            v-for="(icon, iconName) in iconManager"
            :key="iconName"
            class="p-3 rounded"
          >
            <i :class="icon" :style="{ backgroundColor: '#ffffff' }"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IconManager } from '../../utils/iconManager.js';
import studentProfile from '../../data/studentProfile.json';

export default {
  name: 'StudentDetails',
  data() {
    const { pencil, chatDots, calendar3, envelope, telephone, threeDots } = IconManager;
    return {
      iconManager: { pencil, chatDots, calendar3, envelope, telephone, threeDots },
      studentProfile: studentProfile,
    };
  },
  computed: {
    fullName() {
      const { aboutinfo } = this.studentProfile.studentProfile;
      return `${aboutinfo['First Name']} ${aboutinfo['Last Name']}`;
    },
    studentID() {
      return this.studentProfile.studentProfile.careerdetails.careers[0].studentID; 
    },
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}
.student-details {
  width: 330px;
}
</style>
