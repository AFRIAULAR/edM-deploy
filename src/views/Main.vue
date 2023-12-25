<template>
  <div class="container-fluid">
    <div class="row">
      <div class="menu bg-white col-auto" :style="{ width: menuWidth + 'px' }">
        <Menu :bgColor="backgroundColor" :menuWidth="menuWidth" />
      </div>
      <div class="profile col-12" :style="profileStyles">
        <Profile :bgColor="backgroundColor" :profileWidth="profileWidth" />
      </div>
      <div class="record col" :style="{ backgroundColor: backgroundColor, paddingTop: '15px', width: recordWidth }">
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
      profileWidth: 360,
      recordWidth: '100%',
      isSmallScreen: false,
    };
  },
  computed: {
    profileStyles() {
      return {
        width: this.isSmallScreen ? '100%' : this.profileWidth + 'px',
        backgroundColor: this.backgroundColor,
        paddingTop: '15px',
        zIndex: 1,
      };
    },
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768;
      this.profileWidth = this.isSmallScreen ? 720 : 360; 
      this.recordWidth = this.isSmallScreen ? '100%' : 'auto'; 
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';

</style>
