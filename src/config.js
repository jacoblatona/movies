import axios from 'axios'

export const API_KEY = '?api_key=' + process.env.VUE_APP_API_KEY;
export const API_URI = process.env.VUE_APP_API_URI;
export const IMAGE_PATH = process.env.VUE_APP_IMAGE_PATH

export const API = axios.create({
    baseURL: API_URI
});