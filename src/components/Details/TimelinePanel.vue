<template>
  <div>
    <TimelineHeader />
    <TimelineCards />
  </div>
</template>

<script>
import TimelineHeader from './TimelineHeader.vue'
import TimelineCards from './TimelineCards.vue'

export default {
  components: {
    TimelineHeader, 
    TimelineCards
  }
}
</script>