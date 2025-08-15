import axios from "axios";

const app = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // withCredentials: true
})

const api = {
    get: app.get,
    patch: app.patch,
    put: app.put,
    delete: app.delete,
    post: app.post,
}

export default api;