import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'https://budcarserver.cheapify.store',
    baseURL: 'http://localhost:3000/api'
});


export default axiosInstance;