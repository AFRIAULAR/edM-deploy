<template>
  <div 
    class="icon-wrapper bg-white mt-0" 
    :class="{ expanded: isExpanded }"
    :style="{ width: isExpanded ? '250px' : '65px' }"
    @click="toggleExpandMenu"
  >
    <i
      v-for="(iconClass, iconName) in selectedIcons"
      :key="iconName"
      class="material-icons bg-rounded"
      :class="{ 'special-icon': iconName === selectedIcon }"
      :style="{ 
        backgroundColor: isExpanded && selectedIcon === iconName ? '#4436FD' : '#ffffff',
        color: isExpanded && selectedIcon === iconName ? '#ffffff' : '#6E6B7B',
      }"
      @click="selectIcon(iconName)"
    >{{ iconClass }}</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIcon: '',
      isExpanded: false,
      selectedIcons: {
        dashBoard: 'home',
        more: 'more_horiz',
        add: 'add_box',
        outbound: 'outbound',
        loop: 'loop',
        analytics: 'analytics',
        school: 'school',
        leaderboard: 'leaderboard',
        addChart: 'add_chart',
        accountTree: 'account_tree',
      },
    };
  },
  methods: {
    toggleExpandMenu() {
      this.isExpanded = !this.isExpanded; 
      this.$emit('expand-menu', this.isExpanded); 
    },
    selectIcon(iconName) {
      this.selectedIcon = iconName;
    }
  }
};
</script>

<style scoped>
.icon-wrapper {
  width: 65px ;
  padding-top: 0;
  margin-top: 0;
  background-color: #ffffff;
  color: #6E6B7B;
  
}

.expanded {
  width: 250px;
  margin-top: 0;
  padding: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  z-index: 2;
}

.special-icon {
  color: #ffffff;
  background: #4436FD;
}

.icon-wrapper i {
  font-family: 'Material Icons'; 
  font-size: 24px; 
  font-weight: 400;
  line-height: 21px;
  border-radius: 10px; 
  padding: 10px;
  margin-top: 10px; 
  transition: width 0.3s ease, padding 0.3s ease; 
  
}
</style>
