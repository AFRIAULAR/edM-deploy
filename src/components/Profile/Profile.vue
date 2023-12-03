<template>
  <div>
    <StudentDetails />
    <StudentInfo />
    <About />
    <CareerDetails />
    <ManageWidgets />
  </div>
</template>

<script>
import StudentDetails from '@/components/Profile/StudentDetails.vue';
import StudentInfo from '@/components/Profile/StudentInfo.vue';
import About from '@/components/Profile/About.vue'
import CareerDetails from '@/components/Profile/CareerDetails.vue'
import ManageWidgets from '@/components/Profile/ManageWidgets.vue'

export default {
  components: {
    StudentDetails,
    StudentInfo, 
    About, 
    CareerDetails,
    ManageWidgets
  },
};
</script>
