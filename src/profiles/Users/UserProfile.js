const { createMap, mapFrom, forMember, mapWith } = require("@automapper/core");
const { mapper } = require("../../utils/Helper/MapperHelper");
const userModel = require("../../models/Users/UserModel");
const { userDto } = require("../../dtos/users/UserDto");
const UserContactAddressModel = require("../../models/Users/UserContactAddressModel");
const UserContactAddressDto = require("../../dtos/users/UserContactAddressDto");

function UserProfile() {
    createMap(
        mapper,
        userModel,
        userDto,
        forMember(
            (destination) => destination.id,
            mapFrom((source) => {
                return source.id;
            }),
        ),
        forMember(
            (destination) => destination.name,
            mapFrom((source) => {
                return source.name;
            }),
        ),
        forMember(
            (destination) => destination.email,
            mapFrom((source) => {
                return source.email;
            }),
        ),
        forMember(
            (destination) => destination.token,
            mapFrom((source) => {
                return source.token;
            }),
        ),
        forMember(
            (destination) => destination.profilePicture,
            mapFrom((source) => {
                return source.profilePicture;
            }),
        ),
        forMember(
            (destination) => destination.address,
            mapWith(
                UserContactAddressDto,
                UserContactAddressModel,
                (source) => {
                    return source.address;
                },
            ),
        ),
    );
}

module.exports = { UserProfile };
