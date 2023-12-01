<template>
  <div class="icon-wrapper">
    <i
      v-for="(iconClass, iconName) in iconManager"
      :key="iconName"
      :class="[iconClass, { 'special-icon': iconName === selectedIcon }]"
      @click="selectIcon(iconName)"
      :style="{ backgroundColor: iconName === selectedIcon ? '#4436FD' : 'transparent' }"
    ></i>
  </div>
</template>

<script>
import { IconManager } from '@/utils/iconManager.js'; 

export default {
  data() {
    return {
      selectedIcon: '', 
      iconManager: IconManager,
    };
  },
  methods: {
    selectIcon(iconName) {
      this.selectedIcon = iconName === this.selectedIcon ? '' : iconName;
    }
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
}

.special-icon {
  color: #ffffff; 
  background: #4436FD; 
}

.icon-wrapper i {
  width: 45px;
  height: 42px;
  background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
}
</style>
