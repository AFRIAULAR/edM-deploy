<template>
  <div class="student-details bg-white rounded p-4">
    <div class="d-flex flex-column gap-3">
      <div class="d-flex align-items-center gap-3">
        <img
          class="rounded-circle"
          style="width: 65px; height: 65px;"
          src="../assets/img/student-img.png"
          alt="Student Image"
        />
        <div class="d-flex flex-column">
          <div class="fw-bold">Danielle Munchen Schollengberg</div>
          <div>Reg. ID: AYSI32392</div>
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
import { IconManager } from '@/utils/iconManager.js';

export default {
  name: 'StudentDetails',
  data() {
    const { pencil, chatDots, calendar3, envelope, telephone, threeDots } = IconManager;
    return {
      iconManager: { pencil, chatDots, calendar3, envelope, telephone, threeDots },
    };
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}
</style>
