import renewAccessToken from "../utils/renewAccessToken.js";
import { dom } from "../utils/index.js";
let ACCESS_TOKEN = sessionStorage.getItem('YOUR_ACCESS_TOKEN');
if (!ACCESS_TOKEN)
    ACCESS_TOKEN = await renewAccessToken();
if (ACCESS_TOKEN == null) {
    alert('Login to access this page');
    location.href = '/index';
}
const setUserDetails = function () {
    let details = dom('p.details');
    const { name, username, password, profilePic } = jwt_decode(ACCESS_TOKEN);
    details[0].innerText = name;
    details[1].innerText = username;
    details[2].innerText = password;
    let userImage = dom('.profile .current-profile-pic');
    userImage.src = profilePic;
};
setUserDetails();
