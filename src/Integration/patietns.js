import api from "./api";

export default {
    getAlarms: function(){
        return new Promise((resolve, reject)=>{
            api .get("/alarmas/v1/list")
            .then((response)=>{
                resolve(response.data);
            })
            .catch((response)=>{
                reject(response.status)
            });
        });
    }
}