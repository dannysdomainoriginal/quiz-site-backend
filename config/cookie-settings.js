export const refreshTokenCookieConfig = {
  httpOnly: true,
  secure: false, // change to true in production ie deployment 
  sameSite: 'strict',
  maxAge: 24 * 60 * 60 * 1000
}