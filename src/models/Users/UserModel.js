const { Database } = require("../../utils/DataBaseAppsUtils");
const { DataTypes } = require("sequelize");


const UserModel = Database.define(
    "UserModel",
    {
        id: {
            field: "id",
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            field: "name",
            type: DataTypes.STRING,
        },
        email: {
            field: "email",
            type: DataTypes.STRING,
        },
        password: {
            field: "password",
            type: DataTypes.STRING,
        },
        // profilePicture: {
        //     field: "profile_picture",
        //     type: DataTypes.STRING,
        // },
        token: {
            field: "token",
            type: DataTypes.STRING,
        },
        // createdAt: {
        //     field: "created_at",
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW,
        //     allowNull: false,
        // },
        // updatedAt: {
        //     field: "updated_at",
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW,
        //     allowNull: false,
        // },
    },
    {
        tableName: "users",
        timestamps: false,
    },
);

console.log(UserModel)


// UserModel.belongsTo(productModel,{
//     foreignKey:{
//         field:"id_user",
//         name:"idUser"
//     }
// })

module.exports = UserModel;
