<template>
<div>
    <form @submit.prevent="search">
        <md-card>
            <md-card-header>
                <h1 class="md-title">Búsqueda de Artículos</h1>
            </md-card-header>
            <md-card-content>
                <div>
                    <label>Palabras clave: </label>
                    <input required v-model="palabrasClave"/>
                </div>
                <div>
                    <button class="button">Buscar</button>
                </div>
                <ul class="results">
                    <li v-for="(item, index) in results" :key="item">
                        {{index}} - {{item}}
                    </li>
                </ul>
            </md-card-content>
        </md-card>
    </form>
</div>
</template>

<script>
import Searching from '../Integration/searching.js'

export default {
    name: 'Home',
    data(){
        return{
            palabrasClave: "",
            results: []
        };
    },
    methods:{
        search(){
            Searching.search(this.palabrasClave)
            .then((response)=>this.results.concat(response.data))
            .catch();
        },
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

</style>