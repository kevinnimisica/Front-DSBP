<template>
  <div class="home">
    <NavBar/>
    <h1>Patients</h1>
    <table class="results">
        <tr class="resultsHeader">
            <th>Index</th>
            <th>Identification</th>
            <th>Name</th>
        </tr>
        <tr v-for="(item, index) in results" :key="item">
            <th>{{index+1}}</th>
            <td>{{item.identification}}</td>
            <td>{{item.name}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'patients',
  components: {
    NavBar
  },
  data(){
        return{
          results: [
            {
              identification: 1234, 
              name: "Antonio Paredes"
            },
            {
              identification: 1232, 
              name: "Abel Restrepo"
            },
            ]
        };
  },
}
</script>

<style scoped>

.results{
    width: 100%;
}

.resultsHeader {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(66, 203, 245);
  color: white;
}
td, th{
  border: 1px solid #ddd;
  padding: 8px;
}
</style>