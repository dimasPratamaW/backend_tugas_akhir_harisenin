const { Database } = require("../../utils/DataBaseAppsUtils");
const { DataTypes } = require("sequelize");
const UserModel = require("./UserModel");

const OrderModel = Database.define(
    "OrderModel",
    {
        id_order: {
            field: "id_order",
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        id_item: {
            field: "id_item",
            type: DataTypes.UUID,
        },
        item_name: {
            field: "item_name",
            type: DataTypes.STRING,
        },
        quantity_item: {
            field: "quantity_item",
            type: DataTypes.INTEGER,
        },
        item_price: {
            field: "item_price",
            type: DataTypes.INTEGER,
        },
        total_price: {
            field: "item_price",
            type: DataTypes.INTEGER,
        },
        total_price: {
            field: "item_price",
            type: DataTypes.INTEGER,
        },
        id_user: {
            field: "id_user",
            type: DataTypes.UUID,
        },
    },
    {
        tableName: "orders",
        timestamps: false,
    },
);

console.log(OrderModel)


OrderModel.belongsTo(UserModel,{
    foreignKey:{
        field:"id_user",
        name:"idUser"
    }
})

module.exports = OrderModel;
