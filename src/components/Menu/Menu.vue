<template>
  <div class="container-menu col-1" :style="{ backgroundColor: bgColor, width: menuWidth + 'px' }">
    <DropdownMenu
      :is-menu-expanded="isMenuExpanded"
      :menu-width="menuWidth"
      :selected-icon="selectedIcon"
      :selected-icons="selectedIcons" 
      @expand-menu="onExpandMenu"
      @select-icon="onSelectIcon"
    />
  </div>
</template>

<script>
import DropdownMenu from '@/components/Menu/DropdownMenu.vue';
import ExpandedMenu from '@/components/Menu/ExpandedMenu.vue'; 
import { IconManager } from '@/utils/iconManager.js';

export default {
  components: {
    DropdownMenu,
    ExpandedMenu,
    
  },
  props: {
    bgColor: String,
  },
  data() {
    return {
      menuWidth: 65,
      isMenuExpanded: false,
      selectedIcon: '',
      selectedIcons: IconManager, 
    };
  },
  methods: {
    onExpandMenu(isExpanded) {
      this.isMenuExpanded = isExpanded;
      this.menuWidth = isExpanded ? 250 : 65;
    },
    onSelectIcon(iconName) {
      this.selectedIcon = iconName;
    },
  },
};
</script>

