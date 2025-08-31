import { dom, populatePrevTests } from "../utils/index.js";
import userQuizzesController from "../controllers/userQuizzes.js";
try {
    const data = await userQuizzesController();
    console.log(data);
    const { currentLevel, numberOfTests, quizzesArray } = data;
    populatePrevTests(quizzesArray);
    const userLevel = dom('.profile-area-container .level');
    userLevel.innerText = currentLevel;
    const userTestsTaken = dom('.profile-area-container .tests-taken');
    userTestsTaken.innerText = numberOfTests;
}
catch (err) {
    console.error(err);
}
