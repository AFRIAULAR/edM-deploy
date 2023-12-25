<template>
  <div class="container-fluid" >
    <div class="row">
      <div class="menu col-auto" :style="{ width: menuWidth + 'px' }">
        <Menu :bgColor="backgroundColor" :menuWidth="menuWidth" />
      </div>
      <div class="profile col-auto" :style="{ width: profileWidth + 'px', backgroundColor: backgroundColor, paddingTop: '15px', zIndex: 1 }">
        <Profile :bgColor="backgroundColor" :profileWidth="profileWidth" />
      </div>
      <div class="record col" :style="{ backgroundColor: backgroundColor, paddingTop: '15px' }">
        <RecordDetails :bgColor="backgroundColor" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu.vue';
import Profile from '@/components/Profile/Profile.vue';
import RecordDetails from '@/components/Details/RecordDetails.vue';

export default {
  components: {
    Menu,
    Profile,
    RecordDetails,
  },
  data() {
    return {
      backgroundColor: '#e9ecef',
      menuWidth: 65,
      profileWidth: 360
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';
</style>