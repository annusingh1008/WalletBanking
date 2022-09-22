import axios from "axios"

const axiosInstance = axios.create({
    baseUrl: 'http://localhost:8085'
})

export default axiosInstance;