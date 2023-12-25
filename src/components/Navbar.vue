<template>
  <nav class="navbar navbar-expand-lg pb-2" :style="{ 'background-color': $primaryColor }">
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
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <img class="navbar-nav" src="../assets/img/right-avatar-icons.png" v-if="isLargeScreen">
        <Menu v-if="isSmallScreen"/>
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from '../components/Menu/Menu.vue'

export default {
  components:{
    Menu
  },
  data() {
    return {
      $primaryColor: '#4436FD',
      isSmallScreen: false,
      isLargeScreen: true // Mostrar la imagen en pantallas grandes por defecto
    };
  },
  methods: {
    toggleMenu() {
      this.isSmallScreen = !this.isSmallScreen;
      this.isLargeScreen = !this.isLargeScreen;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768;
      this.isLargeScreen = window.innerWidth > 768; // Actualizar el estado de la pantalla grande
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/_navbar';
@import '../assets/scss/base/_variables';
@import '../assets/scss/base/_responsive'; 
</style>
