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
const UserController = require("../../controllers/UserController");

// POST /api/v1/register - Registrasi pengguna
router.post("/register", registerValidationUtils(), validationBody, UserController.registerUser);

// POST /api/v1/login - Login pengguna
router.post("/login", loginValidationUtils(), validationBody, UserController.loginUser);

// GET /api/v1/all-user - Mendapatkan semua pengguna
router.get("/all-user", validateJWT, UserController.getAllUser);

// GET /api/v1/user/:id - Mendapatkan pengguna berdasarkan ID
router.get("/user/:id", validateJWT, UserController.getUserById);

// DELETE /api/v1/delete-user - Menghapus pengguna
router.delete("/delete-user", validateJWT, UserController.deleteUser);

// Tambahan rute lainnya bisa ditambahkan di sini

module.exports = router;
