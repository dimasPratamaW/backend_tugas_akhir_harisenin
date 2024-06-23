const { Database } = require("../../utils/DataBaseAppsUtils");
const { DataTypes } = require("sequelize");
const UserModel = require("./UserModel");

const UserContactAddressModel = Database.define(
    "UserContactAddressModel",
    {
        id: {
            field: "id",
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            field: "user_id",
            type: DataTypes.UUID,
        },
        phoneNumber: {
            field: "phone_number",
            type: DataTypes.STRING,
        },
        address: {
            field: "address",
            type: DataTypes.STRING,
        },
        city: {
            field: "city",
            type: DataTypes.STRING,
        },
        province: {
            field: "province",
            type: DataTypes.STRING,
        },
        postalCode: {
            field: "postal_code",
            type: DataTypes.STRING,
        },
        createdAt: {
            field: "created_at",
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updatedAt: {
            field: "updated_at",
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        tableName: "user_contact_address",
        timestamps: false,
    },
);

module.exports = UserContactAddressModel;
