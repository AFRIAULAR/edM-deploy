<template>
  <div class="container-fluid" style="margin-top: 65px;">
    <div class="row">
      <div class="col-1 p-2" style="background-color: #f8f9fa;">
        <ColumnLeft /> 
      </div>
      <div class="col-4 p-3" style="background-color: #e9ecef; width: 360px;">
        <ColumnCenter /> 
      </div>
      <div class="col-7 p-4" style="background-color: #ced4da;">
        <ColumnRight /> 
      </div>
    </div>
  </div>
</template>

<script>
import ColumnLeft from './ColumnLeft.vue'; 
import ColumnCenter from './ColumnCenter.vue'; 
import ColumnRight from './columnRight.vue'; 

export default {
  components: {
    ColumnLeft, 
    ColumnCenter, 
    ColumnRight,
  }
};
</script>

<style scoped>
</style>
