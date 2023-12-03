<template>
  <div>
    <StudentDetails />
    <StudentInfo />
    <About />
  </div>
</template>

<script>
import StudentDetails from '@/components/StudentDetails.vue';
import StudentInfo from '@/components/StudentInfo.vue';
import About from '@/components/About.vue'

export default {
  components: {
    StudentDetails,
    StudentInfo, 
    About
  },
};
</script>
