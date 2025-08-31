// objects in chosenQuestions
type questionInstance = {
  Question: string,
  Answer: string,
  _id?: Number,
  opt1: string,
  opt2: string,
  opt3: string,
  opt4: string,

  // added onto
  chosen?: string
}

type chosenQuestions = questionInstance[]