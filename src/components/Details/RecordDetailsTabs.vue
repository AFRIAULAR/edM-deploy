<template>
  <div class="container-tabs">
    <div class="card">
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

<style scoped>
.container-tabs{
  border-bottom: 1px solid #ddd;
}
.card{
  border:none
}
.card-title-id{
  color:#7367f0;
  font-weight: 700;
}
.material-icons {
  font-size: 24px;
  color: #6e6b7b; 
}
.card-header{
  background-color: #e9ecef;
  display: flex;
  justify-content: space-between;
  border: none;
  height: 41px;
  padding: 15px;
}
.nav-tabs-container{
  background-color: #e9ecef;
  display: flex;
  justify-content: center;
  
}
.nav-link {
  background-color: #e9ecef;
  color: #6e6b7b;
  border: none;
}

.nav-link.active {
  background-color: #e9ecef;
  border-bottom: 2px solid #7367f0;
  color: #6e6b7b;
  font-weight: 700;
}

</style>
