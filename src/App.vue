<template>
  <div id="app">
    <Navbar />
    <Main/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from '../src/views/Main.vue'; 
export default {
  components: {
    Navbar,
    Main, 
  
  }
}
</script>

