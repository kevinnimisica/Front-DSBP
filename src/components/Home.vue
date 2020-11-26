<template>
<div>
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
                        <th>{{index}}</th>
                        <td>{{item.identifier}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.author}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.href}}</td>
                    </tr>
                </table>
            </div>
        </div>
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
            results: [ {
        identifier: "SCOPUS_ID:85091028790",
        title: "Neurological complications with COVID-19: A contemporaneous review",
        author: "Maramattom B.V.",
        date: "July-August 2020",
        href: "https://www.scopus.com/inward/record.uri?partnerID=HzOxMe3b&scp=85091028790&origin=inward"
    },
    {
        identifier: "SCOPUS_ID:85089439114",
        title: "Misconceptions on COVID-19 Risk Among Ugandan Men: Results From a Rapid Exploratory Survey, April 2020",
        author: "Kasozi K.I.",
        date: "28 July 2020",
        href: "https://www.scopus.com/inward/record.uri?partnerID=HzOxMe3b&scp=85089439114&origin=inward"
    }]
        };
    },
    methods:{
        search(){
            Searching.search(this.palabrasClave)
            .then((response)=>this.results = response.data)
            .catch((error)=>console.log(error));
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