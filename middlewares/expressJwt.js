import { expressjwt } from "express-jwt";

// fix the .env load speed later
const ACCESS_TOKEN_SECRET = 'd70ea0072b9032b385312ce2cf9a520c001a99ec6519a56bbdc93a85674a1c872844e56c24271c3a9d30ba310ed76a4f243da81398ffdcbb74634c4e0e4d36a9'

const expressJwt = expressjwt({
    secret: process.env.ACCESS_TOKEN_SECRET || ACCESS_TOKEN_SECRET,
    algorithms: ['HS256'],
    requestProperty: 'user'
})

export default expressJwt