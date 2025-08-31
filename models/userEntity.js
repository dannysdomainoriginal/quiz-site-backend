import { format } from "date-fns";
import { v4 as uuid } from 'uuid'

class userEntity {

  static findByUsername(username) {
    return this.findOne({ username })
  }

  async addQuizSession (arr) {
    console.log(arr)
    let testScore = this.cumulateSessionScore(arr)
    let testDate = this.generateSessionDate()

    this.TESTS.push({
      score: testScore,
      date: testDate,
      id: uuid()
    })

    this._data.numberOfTests ++
    this._data.currentScore += testScore
    this._data.currentLevel = this.updateUserLevel()
    this._data.currentAggregate = this.updateUserAggregate()

    await this.save()
  }

  cumulateSessionScore (questionsArr) {
    let score = 0

    questionsArr.forEach(question => {
      if ( question.chosen == question.Answer ) {
        score += 1
      }
    });

    return score
  }

  generateSessionDate () {
    const now = new Date()
    return format(now, 'EEE do MMM yyyy')
  }

  updateUserAggregate () {
    return this._data.currentScore + '/' + this._data.numberOfTests * 20
  }

  updateUserLevel () {
    let exp = this._data.numberOfTests
    
    const value = exp <= 1 ? 'Rookie'
                : exp < 5  ? 'Novice'
                : exp < 10 ? 'Intermediate'
                : 'Master'

    return value
  }
}

export default userEntity