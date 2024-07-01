import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'https://quicksolar-eight.vercel.app/api',
    baseURL: 'http://localhost:3000/api'
});


export default axiosInstance;