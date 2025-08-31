import express from 'express'
import { addQuizSession, generateQuiz } from '../controllers/quiz/index.js'
const router = express.Router()

router.route('/')
  .get(generateQuiz)
  .post(addQuizSession)

router.get('/get', generateQuiz)
router.post('/post', addQuizSession)

export default router