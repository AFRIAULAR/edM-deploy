<template>
  <Menu 
    :is-expanded="isMenuExpanded" 
    :menu-width="menuWidth"
    :selected-icon="selectedIcon"
    :selected-icons="selectedIcons"
    @expand-menu="onExpandMenu"
    @select-icon="onSelectIcon"
  />
</template>

<script>
import Menu from './ExpandedMenu.vue'; 

export default {
  components: {
    Menu
  },
  props: {
    isMenuExpanded: Boolean,
    menuWidth: Number,
    selectedIcon: String,
    selectedIcons: Object
    
  },
  methods: {
    onExpandMenu(isExpanded) {
      this.$emit('expand-menu', isExpanded); 
    },
    onSelectIcon(iconName) {
      this.$emit('select-icon', iconName); 
    }
    
  }
};
</script>
