const { validationResult } = require("express-validator");
const { BadRequest } = require("http-errors");

const validationBody = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors
            .array()
            .map((error) => error.msg)
            .join(", ");
        return next(new BadRequest(errorMessages));
    }

    next();
};

module.exports = { validationBody };
