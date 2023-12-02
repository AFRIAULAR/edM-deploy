<template>
  <div class="icon-wrapper">
    <i
      v-for="(iconClass, iconName) in selectedIcons"
      :key="iconName"
      :class="[iconClass, { 'special-icon': iconName === selectedIcon }]"
      @click="selectIcon(iconName)"
      :style="{ backgroundColor: iconName === selectedIcon ? '#4436FD' : '#ffffff' }"
    ></i>
  </div>
</template>

<script>
import { IconManager } from '@/utils/iconManager.js';

export default {
  data() {
    const {
      dashBoard,
      more,
      add,
      outbound,
      loop,
      analytics,
      school,
      leaderboard,
      addChart,
    } = IconManager;

    return {
      selectedIcon: '',
      selectedIcons: {
        dashBoard,
        more,
        add,
        outbound,
        loop,
        analytics,
        school,
        leaderboard,
        addChart,
      },
    };
  },
  methods: {
    selectIcon(iconName) {
      this.selectedIcon = iconName === this.selectedIcon ? '' : iconName;
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5px;
  background-color: #ffffff;
}

.special-icon {
  color: #ffffff;
  background: #4436FD;
}

.icon-wrapper i {
  width: 45px;
  height: 42px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
