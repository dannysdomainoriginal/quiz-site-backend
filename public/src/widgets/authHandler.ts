import { dom } from '../utils/index.js'
import loginController from '../controllers/login.js'
import signupController from '../controllers/signup.js'

const signUpForm = dom('.signup-form') as HTMLFormElement
signUpForm.addEventListener('submit', async function (this, e) {
  e.preventDefault()
  e.stopPropagation()

  const formData = new FormData(this)
  await signupController(formData)
})

const loginForm = dom('.login-form') as HTMLFormElement
loginForm.addEventListener('submit', async function (this, e) {
  e.preventDefault()
  e.stopPropagation()

  const formData = new FormData(this)
  await loginController(formData)
})