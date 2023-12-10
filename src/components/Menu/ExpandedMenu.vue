<template>
  <div 
    class="icon-wrapper bg-white mt-0" 
    :class="{ expanded: isExpanded }"
    :style="{ width: menuWidth + 'px' }"
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
    >{{ iconClass }}
   </i>
  </div>
</template>

<script>
export default {
  props: {
    isExpanded: Boolean,
    menuWidth: Number,
    selectedIcon: String,
    selectedIcons: Object
  },
  methods: {
    toggleExpandMenu() {
      this.$emit('expand-menu', !this.isExpanded); 
    },
    selectIcon(iconName) {
      this.$emit('select-icon', iconName); 
    },
    
  }
};
</script>

<style scoped>
.icon-wrapper {
  width: 65px;
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
  align-items: flex-start;
  text-align: left;

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
  z-index: 999;
}
</style>
