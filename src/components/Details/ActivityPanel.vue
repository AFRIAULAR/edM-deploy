<template>
  <div class="activity-container">
    <ul class="activity-list">
      <li
        v-for="(activity, index) in items.studentInfo[0].activities"
        :key="index"
        :class="['activity-item', activity.borderClass, { 'active': selectedActivity === index }]"
      >
        <a
          href="#"
          @click="selectActivity(index)"
          class="activity-link"
        >
          <div class="material-icons" >{{ activity.title }}</div>
          <div class="text-uppercase" >{{ activity.subtitle }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import activityData from '../../data/activityData.json';
export default {
  data() {
    return {
      items: activityData,
      selectedActivity: null,
    };
  },
  methods: {
    selectActivity(index) {
      this.selectedActivity = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/details/activity-panel';
</style>
