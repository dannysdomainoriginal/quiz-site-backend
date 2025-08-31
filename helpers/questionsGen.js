import QuestionsDB from '../models/questions.js'
import questions from '../models/questions.json' with { type: 'json' }

const questionsGen = async () => {

  const arr = [...questions]

  await QuestionsDB.insertMany(arr)
  console.log('Questions have been successfully generated')
}

export default questionsGen