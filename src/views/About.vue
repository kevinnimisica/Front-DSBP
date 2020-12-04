<template>
  <div class="about">
    <NavBar/>
    <h1>About</h1>
    <img src="../assets/SMP.png"/>
    <h3>Pablo Garibeh</h3>
    <h3>Felix Restrepo</h3>
    <h3>Kevin Peláez</h3>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'about',
  components: {
    NavBar
  }
}
</script>
