const express = require("express");
const router = express.Router();
const {
    validationBody,
} = require("../../middlewares/Validations/ValidationRequest");
const {
    registerValidationUtils,
    loginValidationUtils,
} = require("../../utils/Validations/ValidationBodyUtils");
const validateJWT = require("../../middlewares/Validations/ValidationJWT");
const userController = require("../../controllers/UserController");

router.get("/all-user", validateJWT, userController.getAllUser);
router.get("/user/:id", validateJWT, userController.getUserById);
router.post(
    "/register-user",
    registerValidationUtils(),
    validationBody,
    userController.registerUser,
);
router.post(
    "/login-user",
    loginValidationUtils(),
    validationBody,
    userController.loginUser,
);
// router.post("/forgot-password", userController.forgotPassword);
// router.post("/reset-password", userController.resetPassword);
// router.post(
//     "/user/change-password",
//     validateJWT,
//     userController.changePassword,
// );
// router.put("/update-user", validateJWT, userController.updateUser);
router.delete("/delete-user", validateJWT, userController.deleteUser);

module.exports = router;
