import api from "../controllers/api.js";
function errorHandler(err) {
    if (err.status == 404 && err.response?.data.error == 'User was not found') {
        api.defaults.headers.Authorization = '';
        sessionStorage.removeItem('YOUR_ACCESS_TOKEN');
        return location.href = '/index';
    }
    if (err.response?.data.noRefreshToken) {
        alert('Login to access this page');
        location.href = '/index';
    }
    else if (err.response) {
        window.alert(err.response.data.error);
        console.error('Server error: ', err.response);
    }
    else if (err.request) {
        window.alert('Request timed out, please try again');
        console.log('No response received: ', err.request);
    }
    else {
        window.alert('Something went wrong');
        console.log('Request setup error: ' + err.message);
    }
}
export default errorHandler;
