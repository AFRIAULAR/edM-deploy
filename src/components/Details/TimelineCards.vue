<template>
  <div>
    <div v-for="(info, index) in cardInfo" :key="index">
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
@import '../../assets/scss/components/details/_timeline-cards';
</style>
