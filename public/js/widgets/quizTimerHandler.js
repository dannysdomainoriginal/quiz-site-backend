import submitSessionController from "../controllers/submitQuiz.js";
import { dom } from "../utils/index.js";
import Session from "../controllers/quizGen.js";
const startingMinutes = 5;
let time = startingMinutes * 60;
let countDown = dom('.question-container .timer');
const updateCountDown = async function () {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10)
        seconds = '0' + seconds;
    if (time < 0) {
        clearInterval(timerInterval);
        alert(`Your time has elasped
    Your test will be auto-submitted`);
        try {
            await submitSessionController(Session);
            location.href = './profile';
        }
        catch (err) {
            console.log(err);
        }
        return;
    }
    countDown.innerHTML = `0${minutes}:${seconds}`;
    time--;
};
let timerInterval = setInterval(updateCountDown, 1000);
