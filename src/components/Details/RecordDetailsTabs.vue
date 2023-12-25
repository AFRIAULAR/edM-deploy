<template>
  <div class="container-tabs">
    <div class="card-tab">
      <div class="card-header">
        <div class="card-title-id">
          Record Details / {{ studentProfile.studentProfile.careerdetails.careers[0].studentID }}
        </div>
          <span class="material-icons ">app_registration</span>
      </div>
    </div>
    <div class="nav-tabs-container">
            <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Overview</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Enrollment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Academic</a>
      </li>
    </ul>
    </div>

  </div>
</template>

<script>
import studentProfile from '../../data/studentProfile.json'

export default {
  data() {
    return {
      studentProfile: studentProfile,
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/details/_record-details-tabs';
</style>