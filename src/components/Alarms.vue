<template>
  <div class="home">
    <NavBar/>
    <h1>Alarms</h1>
    <button class="button" @click="getAlarms">Refresh</button>
    <table class="results">
      <tr class="alarmsHeader">
        <th>Index</th>
        <th>Measure</th>
        <th>Patient</th>
        <th>Value</th>
        <th>Time</th>
    </tr>
    <tr v-for="(item, index) in alarmsArrived" :key="item">
        <th>{{index+1}}</th>
        <td>{{item.medida}}</td>
        <td>{{item.paciente}}</td>
        <td>{{item.valor}}</td>
        <td>{{item.timestamp}}</td>
    </tr>
  </table>
    
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PatientsApi from '../Integration/patietns.js'

export default {
  name: 'alarms',
  data(){
        return{
          alarmsArrived: []
        };
  },
  components: {
    NavBar
  },
  methods:{
    getAlarms: function(){
      PatientsApi.getAlarms()
      .then((response)=> this.alarmsArrived = response)
      .catch((error)=>console.log(error))
    }
  }
}
</script>

<style scoped>
.button {
  margin: 2%;
  font-weight: bold;
  width: 100px;
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  background: rgb(238, 76, 97);
  border-radius: 5px;
  border: none;
  padding: 0.4rem 0;
}
.results{
    width: 100%;
}

.alarmsHeader {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(238, 76, 97);
  color: white;
}
td, th{
  border: 1px solid #ddd;
  padding: 8px;
}

</style>