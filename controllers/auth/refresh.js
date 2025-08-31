import User from "../../models/user.js"
import jwt from 'jsonwebtoken'

const refresh = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.refreshToken) return res.status(401).json({error: 'no tokens found in cookie', noRefreshToken: true})

  console.log('refresh route accessed')
  const refreshToken = cookies.refreshToken

  try {

    const user = await User.findOne({ refreshToken })
    // if (!user) return res.sendStatus(403)
    if (!user) return res.status(403).json({error: 'no user found!', noRefreshToken: true})

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    if ( user._id != decoded.id ) return res.status(403).json({error: "ids don't match", noRefreshToken: true})

    const accessToken = user.generateAccessToken()
    console.log(`${user.name} was just granted an access token`)
    res.status(201).json({message: `User: ${user.name} has received an access token`, success: true, accessToken})

  } catch (err) {
    console.error(err.message)
    return res.status(401).json({error: 'Access Denied', noRefreshToken: true})
  }
}

export default refresh