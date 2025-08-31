import User from "../../models/user.js";

const getUserQuizzes = async (req, res) => {
  try {

    const id = req.user?.id
    const user = await User.findById(id, { TESTS: 1, _data: 1, _id: 0 })
    if (!user) return res.status(404).json({ error: 'User was not found'})

    const { currentLevel, numberOfTests } = user._data

    return res.status(200).json({ success: true, quizzesArray: user.TESTS, currentLevel, numberOfTests })

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
}

export default getUserQuizzes