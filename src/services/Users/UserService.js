const userRepository = require("../../repositories/Users/UserRepository");
const {
    Unauthorized,
    Conflict,
    NotFound,
    GatewayTimeout,
} = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { mapper } = require("../../profiles/index");
const { userDto } = require("../../dtos/users/UserDto");
const userModel = require("../../models/Users/UserModel");

async function registerUser(args) {
    const user = await userRepository.getUserByEmail({ email: args.email });

    if (user) {
        throw new Conflict("User already exists");
    }

    const hashedPassword = await bcrypt.hash(args.password, 10);

    const newUser = await userRepository.createUser({
        name: args.name,
        email: args.email,
        password: hashedPassword,
    });

    return await getUserById({ id: newUser.id });
}

async function loginUser(args) {
    const user = await userRepository.getUserByEmail({ email: args.email });

    if (!user) {
        throw new NotFound("User not found");
    }

    const passwordMatch = await bcrypt.compare(args.password, user.password);

    if (!passwordMatch) {
        throw new Unauthorized("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "365d",
    });

    await userRepository.insertUserToken({
        id: user.id,
        token: token,
    });

    return await getUserById({ id: user.id });
}

async function getAllUser() {
    const getAllUser = await userRepository.getAllUser();
    return mapper.mapArray(getAllUser, userModel, userDto);
}

async function getUserById(args) {
    const getUser = await userRepository.getUserById({ id: args.id });

    if (!getUser) {
        throw new NotFound("User not found");
    }
    return mapper.map(getUser, userModel, userDto);
}

async function updateUser(args) {
    const getUser = await userRepository.getUserById({ id: args.id });

    if (!getUser) {
        throw new NotFound("User not found");
    }

    const updateUser = await userRepository.updateUser({
        id: args.id,
        name: args.name,
        email: args.email,
        profilePicture: args.profilePicture,
    });

    if (!updateUser) {
        throw new GatewayTimeout("Update user failed");
    }

    return getUserById({ id: args.id });
}

async function deleteUser(args) {
    const getUser = await userRepository.getUserById({ id: args.id });

    if (!getUser) {
        throw new NotFound("User not found");
    }

    const deleteUser = await userRepository.deleteUser({ id: args.id });

    if (!deleteUser) {
        throw new GatewayTimeout("Delete user failed");
    }

    return true;
}

async function forgotPassword(args) {
    const user = await userRepository.getUserByEmail({ email: args.email });

    if (!user) {
        throw new NotFound("User not found");
    }

    return true;
}

async function resetPassword(args) {
    const user = await userRepository.getUserByEmail({ email: args.email });

    if (!user) {
        throw new NotFound("User not found");
    }

    const hashedPassword = await bcrypt.hash(args.password, 10);
    const resetPassword = await userRepository.resetPassword({
        email: args.email,
        password: hashedPassword,
    });

    return true;
}

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
};
