<template>
  <div class="container-fluid" style="margin-top: 65px;">
    <div class="row">
      <div
        class="container-menu col-1 "
        :style="{ backgroundColor: bgColor, width: menuWidth + 'px' }"
      >
        <DropdownMenu @expand-menu="onExpandMenu" />
      </div>
      <div class="col-4 p-3" style="background-color: #e9ecef; width: 360px;">
        <Profile />
      </div>
      <div class="col-7 p-4" style="background-color: #ced4da;">
        <RecordDetails />
      </div>
    </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Menu/DropdownMenu.vue'; 
import Profile from '@/components/Profile/Profile.vue'; 
import RecordDetails from '@/components/Details/RecordDetails.vue'; 

export default {
  components: {
    DropdownMenu,
    Profile,
    RecordDetails
  },
  data() {
    return {
      menuWidth: 65, 
      bgColor: '#fff' 
    };
  },
  methods: {
    onExpandMenu(isExpanded) {
      this.menuWidth = isExpanded ? 250 : 65; 
    }
  }
};
</script>


<style scoped>
</style>
