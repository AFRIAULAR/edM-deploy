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

<style>
.activity-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0px;
}

.activity-list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 15px;
  padding-bottom: 0;
  margin-bottom: 0px;
  color: #6e6b7b;
}

.activity-item {
  padding: 10px 15px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.4;
  background: #FFF;
  margin-right: 2px;
}

.activity-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  margin-bottom: 0px;

}

.active {
  opacity: 1; 
  font-weight: 700;
}
</style>
