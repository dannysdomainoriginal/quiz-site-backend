import api from "./api.js";
import { errorHandler } from "../utils/index.js";
const signupController = async function (details) {
    api.post('/auth/register', details)
        .then(res => {
        window.alert(res.data.message);
        sessionStorage.setItem('YOUR_ACCESS_TOKEN', res.data.accessToken);
        location.href = '/quiz';
    })
        .catch(err => errorHandler(err));
};
export default signupController;
