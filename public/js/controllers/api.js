import renewAccessToken from "../utils/renewAccessToken.js";
const api = axios.create({
    baseURL: 'http://localhost:8001',
    timeout: 10000,
    withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});
api.interceptors.request.use(async (config) => {
    if (!config.headers.Authorization) {
        let token;
        if (sessionStorage.getItem("YOUR_ACCESS_TOKEN"))
            token = 'Bearer ' + sessionStorage.getItem("YOUR_ACCESS_TOKEN");
        else
            token = 'Bearer ' + await renewAccessToken();
        config.headers.Authorization = token;
        api.defaults.headers.Authorization = token;
    }
    return config;
});
api.interceptors.response.use(res => {
    console.log(res);
    return res;
}, async (err) => {
    console.log('Request intercepted');
    if (err.response?.data.noRefreshToken)
        return Promise.reject(err);
    if (err.response?.status !== 401 && err.response?.data.expiredToken !== true || err.config.url.includes('/refresh')) {
        console.log('Error configuration: ', err.config);
        if (err.config.url.includes('/refresh'))
            console.log('Error refresh');
        return Promise.reject(err);
    }
    console.log(`There was a 401 error: ${err.config}`);
    console.log(err.config);
    const originalRequest = err.config;
    try {
        const res = await api.post('/auth/refresh');
        const newToken = res.data.accessToken;
        console.log(newToken);
        api.defaults.headers.Authorization = `Bearer ${newToken}`;
        sessionStorage.setItem('YOUR_ACCESS_TOKEN', newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
        return console.log('end');
    }
    catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
});
export default api;
