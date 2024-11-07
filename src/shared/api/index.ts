import axios from "axios";
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '../../entities/user/constants.ts';

const api = axios.create({
    baseURL: "http://51.250.70.171:8080", // todo
//     baseURL: "http://localhost:8080", // todo
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// api.interceptors.response.use( todo refresh logic
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;
//
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//
//             try {
//                 const refreshToken = localStorage.getItem('refreshToken');
//                 const response = await axios.post('/api/refresh-token', { refreshToken });
//                 const { token } = response.data;
//
//                 localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token);
//
//                 originalRequest.headers.Authorization = `Bearer ${token}`;
//                 return axios(originalRequest);
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//
//         return Promise.reject(error);
//     }
// );

export default api;