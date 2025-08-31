import fs from 'fs'
import path from 'path'

const viewsDir = path.join(__dirname, 'views')

// Middleware to serve HTML files without extensions
const htmlRouter = (req, res, next) => {
    const filePath = path.join(viewsDir, req.path + '.html')
    // console.log('used', filePath)

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath)
    } else {
        next()
    }
}

export default htmlRouter