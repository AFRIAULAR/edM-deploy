<template>
  <div class="container">
    <div class="sidebar">
      <RecordDetailsTabs />
      <Cards />
      <ActivityPanel />
    </div>
    <div class="timeline">
      
      <TimelinePanel />
      <div class="scrollbar-container">
        <Scrollbar />
      </div>
    </div>
  </div>
</template>

<script>
import RecordDetailsTabs from '../Details/RecordDetailsTabs.vue';
import Cards from '../Details/Cards.vue';
import ActivityPanel from '../Details/ActivityPanel.vue';
import TimelinePanel from '../Details/TimelinePanel.vue';
import Scrollbar from '../Scrollbar.vue';

export default {
  components: {
    RecordDetailsTabs,
    Cards,
    ActivityPanel,
    TimelinePanel,
    Scrollbar
  }
}
</script>

<style scoped>


.timeline {
  width: 100%;
  position: relative; 
}

.scrollbar-container {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 8px;
  padding-top: 60px;
 
}
</style>