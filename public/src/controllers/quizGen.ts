import { errorHandler } from "../utils/index.js";
import api from "./api.js";

const quizGenController = async function () {
  return (
    api.get('/quiz/get')
      .then(res => {
        const data = res.data?.questions
        
        // if (!data) throw new Error('Questions Array is empty')
        console.log(res.data)
        return data
      })
      .catch(err => errorHandler(err))
  )
}

const Session = await quizGenController()
export default Session