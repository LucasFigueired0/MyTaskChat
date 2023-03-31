import axios from 'axios'

export const registerFetch = axios.create({
    baseURL: "http://localhost:3000/"
})