const { body } = require("express-validator");

function registerValidationUtils() {
    return [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name cannot be empty")
            .isString()
            .withMessage("Name must be a string")
            .isLength({ min: 2, max: 255 })
            .withMessage("Name must be between 2 and 255 characters"),
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email cannot be empty")
            .isEmail()
            .withMessage("Email must be a valid email")
            .isLength({ min: 2, max: 255 })
            .withMessage("Email must be between 2 and 255 characters"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password cannot be empty")
            .isStrongPassword({
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
                commonTerms: true,
            })
            .withMessage(
                "Password must contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 symbol and no common terms",
            ),
    ];
}

function loginValidationUtils() {
    return [
        body("email")
            .isEmail()
            .withMessage("Email must be a valid email")
            .isLength({ min: 2, max: 255 })
            .withMessage("Email must be between 2 and 255 characters"),
        body("password")
            .isString()
            .withMessage("Password must be a string")
            .isLength({ min: 8, max: 255 })
            .withMessage("Password must be between 8 and 255 characters"),
    ];
}

function updateValidationUtils() {
    return [
        body("name")
            .isString()
            .withMessage("Name must be a string")
            .isLength({ min: 2, max: 255 })
            .withMessage("Name must be between 2 and 255 characters"),
        body("email")
            .isEmail()
            .withMessage("Email must be a valid email")
            .isLength({ min: 2, max: 255 })
            .withMessage("Email must be between 2 and 255 characters"),
        body("profile_picture")
            .isURL()
            .withMessage("Profile picture must be a location URL"),
    ];
}

module.exports = { registerValidationUtils, loginValidationUtils };
