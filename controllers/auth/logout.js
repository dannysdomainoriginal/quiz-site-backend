import { refreshTokenCookieConfig } from "../../config/cookie-settings.js"
import User from "../../models/user.js"

const logout = async (req, res) => {
  const id = req.user?.id

  try {

    const user = await User.findById(id)
    console.log(user)

    const returnValue = await User.updateOne({_id: id}, { $unset: { refreshToken: '' }})
    console.log(returnValue)

    const { maxAge, ...clearCookieConfig } = refreshTokenCookieConfig
    res.clearCookie('refreshToken', clearCookieConfig)

    if ( returnValue.matchedCount == 0 ) return res.status(400).json({ error: "Id passed in doesn't match any user" })

    // res.redirect(303, '/')
    res.status(201).json({message: `${user.name} has successfully logged out`, success: true})

  } catch (err) {
    console.error(err.message)
    return res.status(500).json({error: err.message})
  }
}

export default logout