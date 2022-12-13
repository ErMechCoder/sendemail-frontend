import axios from "axios"

const isLocalhost = Boolean (
    window.location.hostname ==='localhost' ||
    // [::1] is the localhost adress
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export const SERVER_URL = isLocalhost ? "http://localhost:5000/":"https://api-atul.herokuapp.com/"



export const API_URL= `${SERVER_URL}api/`

export const Axios = axios.create({withCredentials:true,
baseURL:API_URL})