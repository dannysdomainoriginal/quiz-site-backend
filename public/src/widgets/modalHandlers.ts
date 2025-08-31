import { dom, modal } from '../utils/index.js'

// modal one
const signUp = dom('.signin-modal') as HTMLButtonElement
signUp.addEventListener('click', () => modal.open('modal1'))
const closeSignUp = dom('.close-btn') as HTMLButtonElement
closeSignUp.addEventListener('click', () => modal.close('modal1'))

// modal two
const imageLibraryBtn = dom('.modal2.btn') as HTMLButtonElement
imageLibraryBtn.addEventListener('click', () => modal.open('modal2'))

const imageLibraryModal = dom('#modal2') as HTMLDivElement
imageLibraryModal.addEventListener('click', function (e) {
  const element = e.target as HTMLElement

  if (element != dom('.library-modal') && element.parentElement != dom('.library-modal')) {
    
    modal.close('modal2')
    
  }
})

// modal three
const loginBtn = dom('.login-modal') as HTMLButtonElement
loginBtn.addEventListener('click', () => modal.open('modal3'))

const checkResults = dom('.check-results') as HTMLButtonElement
checkResults.addEventListener('click', () => modal.open('modal3'))

const closeLoginBtn = dom('.close-btn-login') as HTMLButtonElement
closeLoginBtn.addEventListener('click', () => modal.close('modal3'))