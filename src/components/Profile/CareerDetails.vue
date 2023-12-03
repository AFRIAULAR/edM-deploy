<template>
  <div class="career-details p-3 rounded shadow" :style="{ backgroundColor: backgroundColor, height: '373px' }">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center">
        <div class="text-muted fs-4 material-icons-round">drag_indicator</div>
        <div class="fw-bold ms-2">{{ sectionTitle }}</div>
      </div>
      <div class="d-flex align-items-center">
        <div class="text-muted fs-4 material-icons-round" :style="{ transform: expandIconTransform }">expand_more</div>
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex flex-column">
        <div class="fw-bold text-muted" style="font-size: 12px;">Career Name:</div>
        <div class="d-flex align-items-center bg-white rounded border border-secondary px-3">
          <div class="fw-bold" style="font-size: 12px;">{{ careerName }}</div>
          <div class="material-icons-round" style="font-size: 16px;">arrow_drop_down</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundColor: '#ffffff',
      sectionTitle: 'Career Details',
      expandIconTransform: 'rotate(-180deg)',
      careerName: 'Software Engineering',
      // Puedes agregar más datos aquí y utilizarlos en el template
    };
  },
};
</script>

<style scoped>
/* Estilos de Bootstrap */
.material-icons-round {
  font-family: 'Material Icons Round';
  font-size: 16px;
}
</style>
