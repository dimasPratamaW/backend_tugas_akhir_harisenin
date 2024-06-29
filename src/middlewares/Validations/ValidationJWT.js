const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const validateJWT = (req, res, next) => {
    const userToken = req.headers.authorization;

    if (!userToken) {
        throw new Unauthorized("Please Login First");
    }

    // const token = userToken.split(" ")[1];

    // if (!token) {
    //     throw new Unauthorized("Please Login First");
    // }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        throw new Unauthorized("Please Login First");
    }
};

module.exports = validateJWT;
