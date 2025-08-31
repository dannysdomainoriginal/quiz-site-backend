import { errorHandler } from "../utils/index.js"
import api from "./api.js"

const userQuizzesController = async function () {
  return (
    api.get('/user/quizzes')
      .then(res => {
        const { currentLevel, numberOfTests, quizzesArray } = res.data
        
        if (!res.data) throw new Error('User Quiz Array is undefined')
        console.log(res.data)
        return { currentLevel, numberOfTests, quizzesArray }
      })
      .catch(err => {
        errorHandler(err)
        throw err
      })
  )
}

export default userQuizzesController