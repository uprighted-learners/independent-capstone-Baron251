const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const SECRET = process.env.JWT;



const validateSession = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, SECRET)

        const user = await User.findById(decodedToken.id);
        if (!user) throw Error("User not found");
        req.user = user
    } catch (err) {
        console.log(err)
    }

    return next();
};

module.exports = validateSession;