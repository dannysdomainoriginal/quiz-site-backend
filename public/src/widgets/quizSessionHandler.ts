import { dom, handleChosen } from '../utils/index.js'
import Session from '../controllers/quizGen.js'
import submitSessionController from '../controllers/submitQuiz.js'

// DEFAULT VALUES
let testNumber = 1
let quizTotalQuestions = 20 // change to 10 later

const optionsContainer = dom('.options-container') as HTMLDivElement

const generateQuestion = function ( testNumber: number ) {
  
  try {
    // destructured options and questions
    const { Question, Answer, chosen, ...options } = Session[testNumber - 1]

    // first element
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    optionsContainer.innerHTML = ''
    optionsContainer.appendChild(overlay)

    // set question number
    const questionNumber = dom('.question-container .number') as HTMLDivElement
    if ( testNumber < 10 ) questionNumber.innerText = '0' + testNumber
    else questionNumber.innerText = '' + testNumber

    // set progress bar width
    const progressBar = dom('.progress-bar .progress') as HTMLDivElement
    let progressWidth = ( testNumber / quizTotalQuestions ) * 100
    progressBar.style.width = progressWidth + '%'

    // set question
    const questionHeading = dom('.question') as HTMLHeadingElement
    questionHeading.innerText = Question

    // launch options
    for ( const [key, value] of Object.entries(options) ) {
      optionsContainer.innerHTML += 
      `
        <label for="${key}" class="options ${value == Answer ? 'right' : '' } ">
          <span>${value}</span>
          <input type="radio" name="options" value="${value}" id="${key}">
        </label>
      `
    }

    // set functionalities

    if (chosen) handleChosen(chosen)

    // handle no chosen
    else {
      let options = dom('.options input') as NodeListOf<HTMLInputElement>

      options.forEach(element => {
        element.addEventListener('click', function (this) {
          handleChosen(this.value)
          Session[testNumber - 1].chosen = this.value
        })
      });
    }

  } catch ( err ) { console.error(err) }
}

generateQuestion(testNumber)

const nextBtn = dom('.next-question') as HTMLButtonElement
nextBtn.addEventListener('click', async function () {

  // set submit or next.
  if ( testNumber >= quizTotalQuestions - 1 ) nextBtn.innerText = 'Submit'
  else nextBtn.innerText = 'Next'

  // on submit.
  if ( testNumber == quizTotalQuestions ) {

    const submit = confirm('Would You Like To Submit?')
    if (submit) {
      try {

        await submitSessionController(Session)
        location.href = '/profile'

      } catch (err) { console.error(err) }
    }

  } else {

    // regular click
    testNumber ++
    generateQuestion(testNumber)
  }
})

const prevBtn = dom('.prev-question') as HTMLButtonElement
prevBtn.addEventListener('click', function () {
  if ( testNumber > 1 ) {
    testNumber --
    nextBtn.innerText = 'Next'

    generateQuestion(testNumber)
  }
})