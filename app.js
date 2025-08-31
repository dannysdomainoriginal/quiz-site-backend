import mongoose from 'mongoose'
import express from 'express'
import path from 'path'
import './config/global-setup.js'
import './helpers/global-error-handlers.js'

// mongoose.connect('mongodb://localhost/quiz-site')
mongoose.connect(MONGODB_ADDON_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

import questionsGen from './helpers/questionsGen.js'
// questionsGen()

import dotenv from 'dotenv'
dotenv.config({ path: './config/.env' }) // custom path

const PORT = process.env.PORT || 3001
const app = express()

// express built-in middlewares here
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// cors
import cors from 'cors'
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}))

// file upload thirdparty middlware
import fileUpload from "express-fileupload";
app.use(fileUpload())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/uploads/images', express.static(path.join(__dirname, 'public', 'images')))

// cookieParser
import cookieParser from 'cookie-parser'
app.use(cookieParser())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// html auto router
import htmlRouter from "./middlewares/htmlAutoRouter.js";
app.use(htmlRouter)

// auth route
import auth from './routes/auth.js'
app.use('/auth', auth)

// add jwt for protected routes
import expressJwt from './middlewares/expressJwt.js'
// app.use(expressJwt)

// quiz route
import quiz from './routes/quiz.js'
app.use('/quiz', expressJwt, quiz) // i switched route to quizzes, because /quiz is already taken

// user route
import user from './routes/user.js'
app.use('/user',expressJwt,  user)


// Place error handlers here and 404 page
import handleUnauthorizedError from "./middlewares/jwt-handler.js";
app.use(handleUnauthorizedError)

import groundLevelErrorHandler from './middlewares/final-level-error-handler.js'
app.use(groundLevelErrorHandler);

// 👇 Place this AFTER all your routes and middlewares
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})