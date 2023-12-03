<template>
  <div>
    <StudentDetails />
    <StudentInfo />
  </div>
</template>

<script>
import StudentDetails from '@/components/StudentDetails.vue';
import StudentInfo from '@/components/StudentInfo.vue';

export default {
  components: {
    StudentDetails,
    StudentInfo
  },
};
</script>
