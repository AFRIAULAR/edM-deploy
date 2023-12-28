<template>
  <div>
    <div v-for="(info, index) in cardInfo" :key="index" class="timeline-card-container">
      <div v-if="monthTitle(index)">
        <div class="month-block">
          <div class="month-header">
            <span class="month-text">{{ getMonth(info.dateText) }}</span>
            <span class="year-text">{{ getYear(info.dateText) }}</span>
          </div>
        </div>
      </div>
      <div class="timeline-card">
        <div class="icon-block">
          <div :class="[{ 'no-icon-circle': info.icon === 'circle' }, { 'icon-circle': info.icon !== 'circle' }]"
                :style="{
                  backgroundColor: info.icon === 'circle' ? 'transparent' : '#7367F0',
                  marginRight: info.icon === 'circle' ? '10px' : '0'}">
            <span class="icon-text" :style="{ color: info.icon === 'circle' ? '#7367F0' : 'white' }">{{ info.icon }}</span>
            <div class="timeline-line"></div> 
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
              <span class="additional-info-text" :style="{ color: info.additionalInfo2 === 'View Email' ? '#7367F0' : '' }">{{ info.additionalInfo2 }}</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { getMonth, getYear, monthTitle } from '../../utils/dateFunctions.js'
import activityData from '@/data/activityData.json'

export default {
  data() {
    return {
      cardInfo: []
    };
  },
  mounted() {
    this.cardInfo = activityData.cardInfo;
  },
  methods: {
    getMonth,
    getYear,
    monthTitle
  }
}
</script>

<style lang="scss" scoped>
.timeline-card-container {
  margin-bottom: 0px;
}

.timeline-card {
  position: relative;
  z-index: 1;
}

.timeline-line {
  position: absolute;
  width: 2px;
  height: (130% ); 
  background-color: #dddddd;
  bottom: 0px;
  left: 20px;
  transform: translateX(50%);
  z-index:-1;
;
}
</style>