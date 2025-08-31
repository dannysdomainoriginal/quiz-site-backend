import renewAccessToken from "../utils/renewAccessToken.js";
import { dom } from "../utils/index.js";
declare const jwt_decode: any

let ACCESS_TOKEN = sessionStorage.getItem('YOUR_ACCESS_TOKEN') as string

if ( !ACCESS_TOKEN ) ACCESS_TOKEN = await renewAccessToken() as string
if ( ACCESS_TOKEN == null ) {
  alert('Login to access this page')
  location.href = '/index'
}

// accessToken is sure from this point
const setUserDetails = function () {

  // set the user details
  let details = dom('p.details') as NodeListOf<HTMLParagraphElement>

  const { name, username, password, profilePic } = jwt_decode(ACCESS_TOKEN)

  details[0].innerText = name
  details[1].innerText = username
  details[2].innerText = password

  // set profile picture
  let userImage = dom('.profile .current-profile-pic') as HTMLImageElement
  // userImage.src = profilePic
  userImage.src = profilePic
}

setUserDetails()