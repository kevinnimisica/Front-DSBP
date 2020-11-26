import api from "./api";

export const Authentication = {
    login: function (username, password) {
        return new Promise((resolve, reject) => {
            api
                .post("/user/v1/user", { userName:username, userPassword:password })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((response) => {
                    reject(response.status);
                });
        });
    },
    signUp: function(username, email, password){
        return new Promise((resolve, reject)=>{
            api
            .post("user/v1/register",{
                userName: username,
                userEmail: email,
                userPassword: password
            })
            .then((response=>{ 
                resolve(response.data);
            }))
            .catch((response)=>{
                reject(response.status);
            })
        });
    }

}