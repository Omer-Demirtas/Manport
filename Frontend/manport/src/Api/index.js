import axios from "axios";

const api = () => 
{
    return axios.create({
    baseURL: "http://192.168.2.210:8080/api/"
    })

}

export default api;