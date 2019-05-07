import axios from "axios";

const api_url = "https://nameless-reef-34646.herokuapp.com"

export default {
    login: (userObj) => {
        console.log(userObj)
        return axios.post(`${api_url}/api/login`)
    },
    logout: () => {
        return axios.post(`${api_url}/api/logout`)
    },
    registerUser: (userObj) => {
        return axios.post(`${api_url}/api/register`)
    }

}