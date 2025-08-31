import { dom } from "../utils/index.js";
import userDataController from "../controllers/userData.js";

try {

  const userData = await userDataController()
  console.log(userData)

  const { numberOfTests, currentAggregate, currentLevel } = userData

  const [ userTestsNumber, userAggregate, userCurrentLevel  ] = dom('.info p') as NodeListOf<HTMLParagraphElement>

  // set user data to sidebar
  userTestsNumber.innerText = numberOfTests
  userAggregate.innerText = currentAggregate
  userCurrentLevel.innerText = currentLevel

  // success message, later change to toast: user successfully logged in
  console.log('user data has been successfully added')

} catch (err) {
  console.error(err)
}