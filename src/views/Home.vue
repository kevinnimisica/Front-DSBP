<template>
  <div class="home">
    <NavBar/>
    <h1>Home</h1>
    <img src="../assets/SMP.png"/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'home',
  components: {
    NavBar
  }
}
</script>
