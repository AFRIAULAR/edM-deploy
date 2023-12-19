<template>
  <div class="container-fluid" style="max-width: 1600px;">
     <div class="row">
      <div class="menu col-auto" style="width: 65px; position: relative;">
        <Menu />
      </div> 
      <div class="profile col-auto" style="width: 360px; background-color: #e9ecef; padding-top: 15px; z-index: 1;">
        <Profile />
      </div>
      <div class="record col " style="background-color: #e9ecef; padding-top: 15px;">
        <RecordDetails />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu.vue' 
import Profile from '@/components/Profile/Profile.vue'; 
import RecordDetails from '@/components/Details/RecordDetails.vue'; 

export default {
  components: {
    Menu,
    Profile,
    RecordDetails
  },

};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
</style>