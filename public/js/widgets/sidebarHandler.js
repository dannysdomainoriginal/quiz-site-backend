import { dom } from "../utils/index.js";
import userDataController from "../controllers/userData.js";
try {
    const userData = await userDataController();
    console.log(userData);
    const { numberOfTests, currentAggregate, currentLevel } = userData;
    const [userTestsNumber, userAggregate, userCurrentLevel] = dom('.info p');
    userTestsNumber.innerText = numberOfTests;
    userAggregate.innerText = currentAggregate;
    userCurrentLevel.innerText = currentLevel;
    console.log('user data has been successfully added');
}
catch (err) {
    console.error(err);
}
