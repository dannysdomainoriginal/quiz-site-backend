import { refreshTokenCookieConfig } from "../../config/cookie-settings.js"
import User from "../../models/user.js"

const login = async (req, res) => {

  if (!req?.body?.username || !req?.body?.password ) return res.status(400).json({ error: 'Please include required credentials: username and password' })

  const { username , password } = req.body
  const USER = await User.findByUsername(username)

  if (!USER) return res.status(400).json({ error: 'Username is invalid' })
  const isMatch = USER.password == password
  if (!isMatch) return res.status(400).json({ error: 'Invalid password!' })

  try{

    const refreshToken = await USER.generateRefreshToken()
    const accessToken = USER.generateAccessToken()

    res.cookie('refreshToken', refreshToken, refreshTokenCookieConfig)

    console.log(USER)
    res.status(201).json({message: `User ${USER.username} has successfully logged in`, success: true, accessToken})

  } catch (err) {
    console.error(err.message)
    return res.status(500).json({error: err.message})
  }
  
}

export default login