import logoutController from "../controllers/logout.js";
import { dom } from "../utils/index.js";
const [myProfile, takeTest, logOut] = dom('.sidebar .settings h4');
myProfile.addEventListener('click', function () {
    if (location.href.includes('quiz')) {
        let reply = confirm("Do you want to quit current quiz?");
        if (!reply)
            return;
    }
    location.href = './profile';
});
takeTest.addEventListener('click', function () {
    if (location.href.includes('quiz')) {
        let reply = confirm("Do you want to quit current quiz?");
        if (!reply)
            return;
    }
    location.href = './quiz';
});
logOut.addEventListener('click', async function () {
    if (location.href.includes('quiz')) {
        let reply = confirm("Do you want to quit current quiz?");
        if (!reply)
            return;
    }
    await logoutController();
});
