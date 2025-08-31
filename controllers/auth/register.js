import User from "../../models/user.js"
import { imageValidator, registerValidator } from "../../helpers/simpleValidator.js"
import path from 'path'
import { v4 as uuid } from 'uuid'
import { refreshTokenCookieConfig } from "../../config/cookie-settings.js"

const register = async (req, res) => {
  if (!req?.body) return res.status(400).json({ error : "Please pass in required credentials: name, username, password, photo" })

  const validation = registerValidator(req.body)
  if(validation !== true) return res.status(400).json({error: `${validation} field is required`, field: `${validation}`})

  const { name, username, password } = req.body
  let photo = req.files?.photo

  if (!photo) console.log('Using default photo')

  if ( photo ) {
    const validatePhoto = imageValidator(photo)
    if(validatePhoto.type == 'error') return res.status(400).json({ message: validatePhoto.message })
  }

  // check for duplicate usernames
  const duplicate = await User.findOne({ username })
  if (duplicate) return res.status(409).json({error: "Duplicate username detected"})

  try {

    // move photo to uploads folder
    const id = uuid()
    let filename

    if ( !photo ) filename = 'images/instructor8.png'
    else {
      filename = id + '-' + username + path.extname(photo?.name)
      await photo.mv(path.join(__dirname, 'uploads', filename))
    }

    const user = await User.create({name, username, password, profilePic: filename})

    // generate refreshToken
    const refreshToken = await user.generateRefreshToken()
    const accessToken = user.generateAccessToken()

    // set refreshToken to httpOnly cookie
    res.cookie('refreshToken', refreshToken, refreshTokenCookieConfig)

    // send data object
    console.log(user)
    res.status(201).json({message: `New User: ${user.name} has been successfully created`, success: true, accessToken})

  } catch (err) {
    console.error(err.message)
    return res.status(500).json({error: err.message})
  }

}

export default register