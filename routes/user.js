import express from 'express'
import { getUserData, getUserQuizzes } from '../controllers/user/index.js'
const router = express.Router()

router.get('/data', getUserData)
router.get('/quizzes', getUserQuizzes)

export default router