import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  Question: String,
  ID: Number,
  opt1: String,
  opt2: String,
  opt3: String,
  opt4: String,
  Answer: String
})

const QuestionsDB = mongoose.model('Question', questionSchema)

export default QuestionsDB