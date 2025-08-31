const handleUnauthorizedError = (err, req, res, next) => {

    if (err.name === 'UnauthorizedError') {

        if (err.code === 'credentials_required') {

            if (req.headers.accept && req.headers.accept.includes('text/html')) return res.status(302).redirect('/')

            return res.status(401).json({error: 'Access Denied', noAccessToken: true})
        }

        if (err.code === 'invalid_token') {

            if (err.inner?.name === 'TokenExpiredError') {

                req.originalPath = req.originalUrl
                // return res.status(301).redirect('/refresh')
                return res.status(401).json({error: 'Token expired', expiredToken: true})
            }

            if ( err.inner?.name === 'JsonWebTokenError' ) {
                return res.status(401).json({ error: 'Invalid token', invalidToken: true})
            }

            if ( err.inner?.name === 'NotBeforeToken' ) {
                return res.status(401).json({ error: 'Token not active yet', notBeforeToken: true})
            }

            return res.status(401).json({ error: 'Invalid or expired token', invalidToken: true})

        }

    }

    next(err) // Pass on non-JWT errors
}

export default handleUnauthorizedError