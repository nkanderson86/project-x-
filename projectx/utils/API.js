import axios from "axios";

const api_url = "https://nameless-reef-34646.herokuapp.com"

export default {
    login: (userObj) => {
        console.log(userObj)
        return axios.post(`${api_url}/api/login`, userObj)
    },
    logout: () => {
        return axios.post(`${api_url}/api/logout`)
    },
    registerUser: (userObj) => {
        return axios.post(`${api_url}/api/register`, userObj)
    },
    getArduinos: () => {
        return axios.get(`${api_url}/api/arduinos`)
    },
    updateArduino: (ardObj) => {
        return axios.post(`${api_url}/api/updateArduino`, ardObj)
    }


}
