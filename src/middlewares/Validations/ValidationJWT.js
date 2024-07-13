const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const validateJWT = (req, res, next) => {
    const userToken = req.headers.authorization;

    console.log(userToken)

    if (!userToken) {
        throw new Unauthorized("Please Login First");
    }

    const token = userToken.split(" ")[1];
    console.log(token)
    if (!token) {
        throw new Unauthorized("Please Login First");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.user = decoded;

        next();
    } catch (error) {
        throw new Unauthorized("Please Login First");
    }
};

module.exports = validateJWT;
