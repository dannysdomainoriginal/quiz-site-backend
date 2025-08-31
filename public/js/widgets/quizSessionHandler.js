import { dom, handleChosen } from '../utils/index.js';
import Session from '../controllers/quizGen.js';
import submitSessionController from '../controllers/submitQuiz.js';
let testNumber = 1;
let quizTotalQuestions = 20;
const optionsContainer = dom('.options-container');
const generateQuestion = function (testNumber) {
    try {
        const { Question, Answer, chosen, ...options } = Session[testNumber - 1];
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        optionsContainer.innerHTML = '';
        optionsContainer.appendChild(overlay);
        const questionNumber = dom('.question-container .number');
        if (testNumber < 10)
            questionNumber.innerText = '0' + testNumber;
        else
            questionNumber.innerText = '' + testNumber;
        const progressBar = dom('.progress-bar .progress');
        let progressWidth = (testNumber / quizTotalQuestions) * 100;
        progressBar.style.width = progressWidth + '%';
        const questionHeading = dom('.question');
        questionHeading.innerText = Question;
        for (const [key, value] of Object.entries(options)) {
            optionsContainer.innerHTML +=
                `
        <label for="${key}" class="options ${value == Answer ? 'right' : ''} ">
          <span>${value}</span>
          <input type="radio" name="options" value="${value}" id="${key}">
        </label>
      `;
        }
        if (chosen)
            handleChosen(chosen);
        else {
            let options = dom('.options input');
            options.forEach(element => {
                element.addEventListener('click', function () {
                    handleChosen(this.value);
                    Session[testNumber - 1].chosen = this.value;
                });
            });
        }
    }
    catch (err) {
        console.error(err);
    }
};
generateQuestion(testNumber);
const nextBtn = dom('.next-question');
nextBtn.addEventListener('click', async function () {
    if (testNumber >= quizTotalQuestions - 1)
        nextBtn.innerText = 'Submit';
    else
        nextBtn.innerText = 'Next';
    if (testNumber == quizTotalQuestions) {
        const submit = confirm('Would You Like To Submit?');
        if (submit) {
            try {
                await submitSessionController(Session);
                location.href = '/profile';
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    else {
        testNumber++;
        generateQuestion(testNumber);
    }
});
const prevBtn = dom('.prev-question');
prevBtn.addEventListener('click', function () {
    if (testNumber > 1) {
        testNumber--;
        nextBtn.innerText = 'Next';
        generateQuestion(testNumber);
    }
});
