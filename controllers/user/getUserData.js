import User from "../../models/user.js";

const getUserData = async (req, res) => {
  try {

    console.log(req.user)
    const id = req.user?.id
    const user = await User.findById(id, { _data: 1, _id: 0 })
    if (!user) return res.status(404).json({ error: 'User was not found'})

    return res.status(200).json({ success: true, userData: user._data })

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
}

export default getUserData