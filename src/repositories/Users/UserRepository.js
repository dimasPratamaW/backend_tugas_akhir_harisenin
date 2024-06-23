const userModel = require("../../models/Users/UserModel");

async function createUser(userData) {
    return await userModel.create(userData);
}

async function getUserByEmail(args) {
    return await userModel.findOne({ where: { email: args.email } });
}

async function getUserById(args) {
    return await userModel.findOne({ where: { id: args.id } });
}

async function insertUserToken(args) {
    return await userModel.update(
        { token: args.token },
        { where: { id: args.id } },
    );
}

async function getAllUser() {
    return await userModel.findAll();
}

async function updateUser(args) {
    return await userModel.update(
        {
            name: args.name,
            email: args.email,
            profilePicture: args.profilePicture,
        },
        { where: { id: args.id } },
    );
}

async function deleteUser(args) {
    return await userModel.destroy({ where: { id: args.id } });
}

async function forgotPassword(args) {
    return await userModel.findOne({ where: { email: args.email } });
}

async function resetPassword(args) {
    return await userModel.update(
        { password: args.password },
        { where: { id: args.id } },
    );
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    insertUserToken,
    getAllUser,
    updateUser,
};
