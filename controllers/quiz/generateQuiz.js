import QuestionsDB from "../../models/questions.js"

const generateQuiz = async (req, res) => {
  try {
    const questions = await QuestionsDB.aggregate([
      { $sample: { size: 20 } },
      { $project: { _id: 0, __v: 0, ID: 0 } } // exclude _id
    ])

    res.status(200).json({ success: true, questions })
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }

}

export default generateQuiz