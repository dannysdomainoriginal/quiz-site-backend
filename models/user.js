import mongoose from "mongoose";
import userEntity from "./userEntity.js";
import jwt from 'jsonwebtoken'
import crypto from "../helpers/crypto.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  profilePic: {
    type: String,
    required: true,
    immutable: true
  },
  TESTS: {
    type: [Object],
    default: []
  },
  refreshToken: String,

  _password: {
    type: String,
    required: true
  },


  _data: {
    numberOfTests: { type: Number, default: 0},
    currentScore: { type: Number, default: 0},
    currentAggregate: { type: String, default: 'No Tests yet'},
    currentLevel: { type: String, default: 'Rookie'}
  }
})

userSchema.loadClass(userEntity)

userSchema.virtual('avatarUrl').get( function () {
  return '/uploads/' + this.profilePic 
})

userSchema.virtual('password')
.get(function () {
  return crypto.decrypt(this._password)
})
.set(function (value) {
  this._password = crypto.encrypt(value)
})

userSchema.methods.generateRefreshToken = async function () {
  const refreshToken = jwt.sign(
    { id: this._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d'}
  )

  this.refreshToken = refreshToken
  await this.save() // auto saves
  return refreshToken
}

userSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign(
    {
      id: this._id,
      name: this.name,
      username: this.username,
      password: this.password, // for easy access on frontend
      profilePic: this.avatarUrl
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '30m'}
  )

    return accessToken
}

const User = mongoose.model('User', userSchema)
export default User