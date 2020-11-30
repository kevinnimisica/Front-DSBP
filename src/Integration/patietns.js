import api from "./api";

export default {
    getAlarms: function(){
        return new Promise((resolve, reject)=>{
            api .get("/repository/v1/alarms")
            .then((response)=>{
                resolve(response.data);
            })
            .catch((response)=>{
                reject(response.status)
            });
        });
    }
}