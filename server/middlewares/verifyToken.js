const { promisify } = require('util')
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        const token = req.headers?.authorization?.split(" ")?.[1]
        if (!token) {
           return res.status(401).send({
                status: "Fail",
                error: "You are not logged in"
            })
        }

        const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET)
        // const user = User.findOne({ email: decoded.email })
        req.user = decoded
        // console.log(decoded);
        next()
    } catch (error) {
     res.status(403).send({
            status: "Fail",
            error: "Invalid User"
        })
    }
}