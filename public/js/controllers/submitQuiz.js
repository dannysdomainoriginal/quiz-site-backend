import errorHandler from "../utils/api-error-handler.js";
import api from "./api.js";
const submitSessionController = async function (Session) {
    await api.post('/quiz/post', { Session })
        .then(res => {
        window.alert(res.data.message);
    })
        .catch(err => errorHandler(err));
};
export default submitSessionController;
