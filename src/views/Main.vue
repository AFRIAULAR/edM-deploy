<template>
  <div class="container-fluid" style="margin-top: 65px; max-width: 1600px;">
     <div class="row">
      <div class="menu col-auto" style="width: 65px; position: relative;">
        <Menu :bgColor="bgColor" />
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
  data() {
    return {
      bgColor: '#fff',
    };
  },
};
</script>
<style scoped>
.menu {
  z-index: 2; 
  margin: 5px;
  padding: 0 5px;
}
</style>