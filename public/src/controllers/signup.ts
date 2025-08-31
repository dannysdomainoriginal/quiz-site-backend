import api from "./api.js";
import { errorHandler } from "../utils/index.js";

const signupController = async function (details: FormData) {
  // post the username and password to /auth/login
  // get the accessToken and store in sessionStorage
  // handle errors like no user found, invalid password
  // return res.data

  api.post('/auth/register', details)
    .then(res => {
      window.alert(res.data.message)
      sessionStorage.setItem('YOUR_ACCESS_TOKEN', res.data.accessToken)
      location.href = '/quiz'
    })
    .catch(err => errorHandler(err))
}

export default signupController