import api from "./api";

export default {
    search: function(palabras){
        return new Promise((resolve, reject)=>{
            api.get("/general", palabras)
            .then((response)=>{
                resolve(response.data);
            })
            .catch((response)=>{
                reject(response.status)
            });
        });
    }
}