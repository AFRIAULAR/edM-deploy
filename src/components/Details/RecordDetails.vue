<template>
  <div>
    <RecordDetailsTabs /> 
    <Cards />
  </div>
</template>

<script>
import RecordDetailsTabs from './RecordDetailsTabs.vue';
import Cards from './Cards.vue';

export default {
  components: {
    RecordDetailsTabs, 
    Cards
},
}
</script>
