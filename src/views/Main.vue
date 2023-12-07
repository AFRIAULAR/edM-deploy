<template>
  <div class="container-fluid" style="margin-top: 65px;">
    <div class="row">
      <Menu :bgColor="bgColor" />
      <div class="col-4 p-3" style="background-color: #e9ecef; width: 360px; ">
        <Profile />
      </div>
      <div class="col-7 p-4" style="background-color: #ced4da;">
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
