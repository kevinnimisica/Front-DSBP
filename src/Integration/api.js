import axios from "axios";

export default axios.create({
    baseURL: "/api/v3",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});