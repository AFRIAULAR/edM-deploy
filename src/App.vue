<template>
  <div id="App">
    <Navbar />
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from '../src/views/Main.vue'; 
import Footer from '../src/components/Footer.vue'
export default {
  components: {
    Navbar,
    Main, 
    Footer
  
  }
}
</script>

