const authToken = 'blabla-token'

export const checkAuth = (req, res, next) => {
    const token = req.headers?.authorization

    if (!token || !token.includes(authToken))  {
        return res.status(401).json({})
    } 

    next()
} 