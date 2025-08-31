import { dom, populatePrevTests } from "../utils/index.js";
import userQuizzesController from "../controllers/userQuizzes.js";

try {

  const data = await userQuizzesController()
  console.log(data)

  const { currentLevel, numberOfTests, quizzesArray } = data

  // populate prev tests
  populatePrevTests(quizzesArray)

  // set user level
  const userLevel = dom('.profile-area-container .level') as HTMLHeadingElement
  userLevel.innerText = currentLevel

  // set user tests taken
  const userTestsTaken = dom('.profile-area-container .tests-taken') as HTMLHeadingElement
  userTestsTaken.innerText = numberOfTests

} catch (err) {
  console.error(err)
}