<template>
  <nav class="navbar navbar-expand-lg" :style="{ 'background-color': $primaryColor }">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../assets/img/left-logo-menuIcon.png"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <img class="navbar-nav" src="../assets/img/right-avatar-icons.png">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      $primaryColor: '#4436FD' 
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/_navbar';
@import '../assets/scss/base/_variables';
@import '../assets/scss/base/_responsive'; 
</style>
