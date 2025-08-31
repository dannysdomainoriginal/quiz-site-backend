// login, register, refresh
import express from 'express'
import expressJwt from '../middlewares/expressJwt.js'
const router = express.Router()


router.post('/login', (await import('../controllers/auth/login.js')).default)
router.post('/register', (await import('../controllers/auth/register.js')).default)
router.post('/refresh', (await import('../controllers/auth/refresh.js')).default)
router.post('/logout', expressJwt, (await import('../controllers/auth/logout.js')).default)


export default router