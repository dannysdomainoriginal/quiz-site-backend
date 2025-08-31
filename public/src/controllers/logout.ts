import api from "./api.js";
import { errorHandler } from '../utils/index.js'

const logoutController = async function () {
  api.post('/auth/logout')
    .then(res => {
      window.alert(res.data.message)
      sessionStorage.removeItem('YOUR_ACCESS_TOKEN')
      api.defaults.headers.Authorization = ''
      location.href = './index'
    })
    .catch(err => errorHandler(err))
}

export default logoutController