import { errorHandler } from "../utils/index.js"
import api from "./api.js"

const userDataController = async function () {
  return (
    api.get('/user/data')
      .then(res => {
        const data = res.data?.userData
        
        if (!data) throw new Error('User Data is empty')
        console.log(res.data)
        return data
      })
      .catch(err => {
        errorHandler(err)
        throw err
      })
  )
}

export default userDataController