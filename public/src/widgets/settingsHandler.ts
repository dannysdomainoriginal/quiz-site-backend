import logoutController from "../controllers/logout.js";
import { dom } from "../utils/index.js";

const [ myProfile, takeTest, logOut ] = dom('.sidebar .settings h4') as NodeListOf<HTMLHeadingElement>

myProfile.addEventListener('click', function (this) {
  if (location.href.includes('quiz')) {
    let reply = confirm("Do you want to quit current quiz?")
    if ( !reply ) return
  }

  location.href = './profile'
})

takeTest.addEventListener('click', function (this) {
  if (location.href.includes('quiz')) {
    let reply = confirm("Do you want to quit current quiz?")
    if ( !reply ) return
  }

  location.href = './quiz'
})

logOut.addEventListener('click', async function (this) {
  if (location.href.includes('quiz')) {
    let reply = confirm("Do you want to quit current quiz?")
    if ( !reply ) return
  }

  await logoutController()
})