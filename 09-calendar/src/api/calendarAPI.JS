import axios from 'axios';
import { getEnvVar } from '../helpers/getEnvVar';

const { VITE_API_URL } = getEnvVar();

const calendarAPI = axios.create({
    baseURL: VITE_API_URL
})

//INTERCEPTORES
calendarAPI.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default calendarAPI;