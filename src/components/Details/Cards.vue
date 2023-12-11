<template>
  <div class="d-flex card-container">
    <div v-for="(item, index) in items" :key="index" class="flex-grow-1 p-1 bg-white rounded  m-2">
      <div class="card-container-upper d-flex justify-content-between align-items-center mb-1">
        <div class="card-icon rounded-circle d-flex justify-content-center align-items-center">
          <span class="text-white material-icons">{{ item.icon }}</span>
        </div>
        <div class="text-right">
          <div class="card-text font-weight-bold text-muted">{{ item.title }}
          <span
            v-if="item.icon2"
            class="material-icons icon2">{{ item.icon2 }}</span>
          </div>
          <div class="subtitle">{{ item.subtitle }} </div>
        </div>
      </div>
      <div class="card-container-lower d-flex justify-content-between align-items-start">
        <div class="card-text text-muted ">{{ item.label1 }}</div>
        <div class="card-text text-muted">{{ item.label2 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsData from '../../data/itemsData.json';
export default {
  data() {
    return {
      items:itemsData
    };
  }
};
</script>

<style>
.material-icons {
  font-size: 25px;
}
.card-container{
 margin:10px
}
.card-icon{
  background-color: #91cc75;
  width: 40px;
  height: 40px;
}
.subtitle{
  font-size: 18px;
  color: #6e6b7b
}
.card-text{
  font-size: 14px;
}
.card-container-upper{
  border-bottom: 1px solid #dddddd;
  padding: 10px;
  color: #6e6b7b;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
}
.card-container-lower{
  color: #6e6b7b;
  padding: 5px;
  font-weight: 700;
}
.icon2{
  color: #6e6b7b;
  font-size: 16px;
}
</style>
