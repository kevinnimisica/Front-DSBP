import api from "./api";

export const Authentication = {
    login: function (username, password) {
        return new Promise((resolve, reject) => {
            api
                .post("/auth", { username, password })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((response) => {
                    reject(response.status);
                });
        });
    }
}