<template>
  <div>
    <RecordDetailsTabs /> 
    <Cards />
    <ActivityPanel />
    <TimelinePanel />
  </div>
</template>

<script>
import RecordDetailsTabs from './RecordDetailsTabs.vue';
import Cards from './Cards.vue';
import ActivityPanel from './ActivityPanel.vue';
import TimelinePanel from './TimelinePanel.vue';

export default {
  components: {
    RecordDetailsTabs,
    Cards,
    ActivityPanel,
    TimelinePanel
},
}
</script>
