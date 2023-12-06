<template>
  <div class="container-menu col-1" 
  :style="{ backgroundColor: bgColor, width: menuWidth + 'px' }">
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


export default {
  components: {
    DropdownMenu,
  },
  props: {
    bgColor: String,
  },
  data() {
    return {
      menuWidth: 65,
      isMenuExpanded: false,
      selectedIcon: '',
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