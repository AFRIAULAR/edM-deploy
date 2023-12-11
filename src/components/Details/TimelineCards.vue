<template>
  <div class="month-block">
    <div class="month-header">
      <span class="month-text">SEPTEMBER</span>
    </div>
  </div>

  <div class="timeline-card-container">
    <div v-for="(info, index) in cardInfo" :key="index" class="timeline-card">
      <div class="icon-block">
        <div class="icon-circle">
          <span class="icon-text">{{ info.icon }}</span>
        </div>
      </div>

      <div class="info-block">
        <div class="info-content">
          <div class="info-header">
            <div>
              <span class="main-text">{{ info.mainText }}</span>
              <span class="secondary-text">{{ info.secondaryText }}</span>
            </div>
            <div class="date-text">{{ info.dateText }}</div>
          </div>
          <div class="additional-info">
            <span class="additional-info-text">{{ info.additionalInfo1 }}</span>
            <span class="additional-info-text">{{ info.additionalInfo2 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import activityData from '@/data/activityData.json'

export default {
  data() {
    return {
      cardInfo: [] 
    };
  },
  mounted() {
    this.cardInfo = activityData.cardInfo;
  }
}
</script>

<style>

.month-header {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 25px;
  padding: 8px;
  background-color: #fff;
  margin: 0 15px;
}

.month-text {
  color: #7367F0;
  font-weight: bold;
  font-size: 12px;
}

.timeline-card-container {
  margin: 0 15px;
  padding: 10px;
  background-color: #fff;
} 
.timeline-card {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.icon-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #7367F0;
  border: 2px solid #DDDDDD;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-text {
  color: white;
  font-size: 12px;
  font-family: 'Material Icons'
}

.info-block {
  flex-grow: 1;
}

.info-content {
  color: #6E6B7B;
  padding: 10px;
  background-color: #F0F0F0;
  border-radius: 5px;
}

.info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.main-text {
  font-weight: bold;
  font-size: 12px;
}

.secondary-text {
  font-size: 12px;
}

.info-footer {
  display: flex;
  justify-content: space-between;
}

.date-text {
  font-size: 12px;
  color: #888888;
}

.additional-info {
  display: flex;
  gap: 10px;
}

.additional-info-text {
  font-weight: bold;
  font-size: 12px;
}

</style>
