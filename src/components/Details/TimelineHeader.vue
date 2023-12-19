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

<style lang="scss" scoped>
@import '../../assets/scss/components/details/_timeline-header';
</style>