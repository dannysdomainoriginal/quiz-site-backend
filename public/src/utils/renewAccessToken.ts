import { AxiosInstance } from "axios"
declare const axios: AxiosInstance

const renewAccessToken = async function () {
  try {

    const res = await axios.post('http://localhost:8001/auth/refresh') // can't use api here, because api.ts imports this
    const token = res.data.accessToken
    sessionStorage.setItem('YOUR_ACCESS_TOKEN', token)
    console.log('Successfully renewed access token: ' + token)

    return token

  } catch (err) { return null }
}

export default renewAccessToken