<template>
  <div class="timeline-container">
    <div class="timeline-header">
      <div class="timeline-title">Timeline</div>
      <div class="d-flex gap-3">
        <div class="timeline-dropdown rounded">Year <i class="material-icons">arrow_drop_down</i></div>
        <div class="timeline-dropdown rounded">Filter by User <i class="material-icons">arrow_drop_down</i></div>
        <div class="timeline-search rounded">
          <input type="text" class="timeline-input" placeholder="Search...">
          <i class="material-icons">search</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>

.timeline-container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 53px;
  padding: 15px;
  margin-top: 0;
  margin: 0 15px;
}

.timeline-header {
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  align-items: flex-start;

}

.timeline-title {
  color: #6E6B7B;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

.timeline-dropdown {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px #D8D6DE solid;
  color: #6E6B7B;
  font-size: 12px;
  font-weight: 700;
}

.timeline-search {
  display: flex;
  align-items: center;
  height: 38px;
  border-radius: 5px;
  border: 1px #D8D6DE solid;
  justify-content: space-between;
}

.timeline-input {
  color: #6E6B7B;
  font-size: 12px;
  font-weight: 700;
  border: none;
  outline: none;
 
}


</style>
