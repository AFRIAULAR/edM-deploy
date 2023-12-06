<template>
  <div class="student-details bg-white rounded ">
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
        <i
          v-for="(icon, iconName) in iconManager"
          :key="iconName"
          class="material-icons rounded"
        >{{ icon }}</i>
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
    const { editNote, chat, today, email, phone, more } = IconManager;
    return {
      iconManager: { editNote, chat, today, email, phone, more },
      selectedIcon: '', 
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
  methods: {
    selectIcon(iconName) {
      this.selectedIcon = iconName === this.selectedIcon ? '' : iconName;
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
  padding: 15px;
}
.material-icons {
  padding: 10px; 
  color: #6E6B7B;
  font-size: 24px;
  font-family: Material Icons;
  font-weight: 400;
  line-height: 21px;
  word-wrap: break-word
}
</style>
