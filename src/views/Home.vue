<template>
  <div class="home">
    <Home msg="Welcome to Your Vue.js App"/>
    <p>{{msg}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>
