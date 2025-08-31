export const registerValidator = (obj) => {
  const { name, username, password } = obj

  if (!name) return "Name"
  if (!username) return "Username"
  if (!password) return "Password"

  return true
}

export const imageValidator = (file) => {

    // File type error
    if (!file.mimetype.startsWith('image/')) {
        return { type: 'error', message: 'Only image files are allowed' }
    }

    // File size error
    if (file.size > 5 * 1024 * 1024) {
        return { type: 'error', message: 'File is too large (max 5MB)' }
    }

    return { type: 'success', message: 'Photo was validated successfully'}

}