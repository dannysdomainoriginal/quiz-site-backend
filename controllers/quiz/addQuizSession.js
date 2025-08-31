import User from "../../models/user.js";

const addQuizSession = async (req, res) => {

  console.log('Quiz route has been reached')
  const Session = req?.body?.Session
  if (!Session) return res.status(400).json({ error : "Please pass in required data: Session" })

  try {

    const username = req.user?.username
    console.log(req.user)
    const user = await User.findByUsername(username)
    if (!user) return res.status(404).json({ error: 'User was not found'})

    await user.addQuizSession(Session)
    return res.status(200).json({ success: true, message: "Quiz session added successfully" })

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
}

export default addQuizSession