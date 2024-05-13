import axios from 'axios';
import { getEnvVar } from '../helpers/getEnvVar';

const { VITE_API_URL } = getEnvVar();

const calendarAPI = axios.create({
    baseURL: VITE_API_URL
})

export default calendarAPI;