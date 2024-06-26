const userService = require("../services/Users/UserService");
const responseHandler = require("../utils/Helper/ResponseHandler");

async function registerUser(req, res, next) {
    try {
        const newUser = await userService.registerUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

async function loginUser(req, res, next) {
    try {
        const user = await userService.loginUser({
            email: req.body.email,
            password: req.body.password
        });
        // Simpan data pengguna di sesi
        req.session.user = user;
        res.setHeader("Authorization", `Bearer ${user.token}`);
        res.sendResponse(user);
    } catch (error) {
        next(error);
    }
}

async function getAllUser(req, res, next) {
    try {
        // Periksa apakah pengguna terotentikasi
        if (!req.session.user) {
            return res.sendStatus(401); // Unauthorized
        }
        return res.sendResponse(await userService.getAllUser());
    } catch (error) {
        next(error);
    }
}

async function getUserById(req, res, next) {
    try {
        return res.sendResponse(await userService.getUserById({ id: req.params.id }));
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        // Contoh: Akses ID pengguna dari sesi
        const userId = req.session.user.id;
        return res.sendResponse(await userService.updateUser({
            id: req.headers.user_id,
            name: req.body.name,
            email: req.body.email,
            profilePicture: req.body.profile_picture
        }));
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        // Contoh: Akses ID pengguna dari sesi
        const userId = req.session.user.id;
        return res.sendResponse(await userService.deleteUser({ id: req.headers.user_id }));
    } catch (error) {
        next(error);
    }
}

async function forgotPassword(req, res, next) {
    try {
        return res.sendResponse(await userService.forgotPassword({ email: req.body.email }));
    } catch (error) {
        next(error);
    }
}

async function resetPassword(req, res, next) {
    try {
        return res.sendResponse(await userService.resetPassword({
            email: req.body.email,
            password: req.body.password
        }));
    } catch (error) {
        next(error);
    }
}

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    forgotPassword,
    resetPassword
};
