<template>
<div>
    <NavBar/>
    <form @submit.prevent="search">
        <div>
            <div>
                <h1 class="md-title">Búsqueda de Artículos</h1>
            </div>
            <div>
                <div>
                    <label>Palabras clave: </label>
                    <input required v-model="palabrasClave"/>
                </div>
                <div>
                    <button class="button">Buscar</button>
                    <button class="button" v-on:click="clear()">Limpiar</button>
                </div>

                <table class="results">
                    <tr class="resultsHeader">
                        <th>Index</th>
                        <th>Identifier</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>date</th>
                        <th>Referencia</th>
                    </tr>
                    <tr v-for="(item, index) in results" :key="item">
                        <th>{{index+1}}</th>
                        <td>{{item.identifier}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.author}}</td>
                        <td>{{item.date}}</td>
                        <td> <a v-bind:href="''+ item.href +''"> {{item.href}} </a></td>
                    </tr>
                </table>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import Searching from '../Integration/searching.js';
import NavBar from './NavBar.vue'

export default {
    name: 'Search',
    data(){
        return{
            palabrasClave: "",
            results: []
        };
    },
    methods:{
        search(){
            Searching.search(this.palabrasClave)
            .then((response)=>this.results = response)
            .catch((error)=>console.log(error));
        },
        clear(){
            this.palabrasClave = "",
            this.results = []
        },
    },
    components:{
        NavBar,
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
  background: rgb(66, 203, 245);
  border-radius: 5px;
  border: none;
  padding: 0.4rem 0;
}

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