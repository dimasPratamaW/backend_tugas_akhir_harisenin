const express = require("express");
const router_order = express.Router();
const OrderModel = require("../../models/Users/OrderModel");
const { orderDeto } = require("../../dtos/users/orderDeto");
const userRepository = require("../../repositories/Users/UserRepository");

const { mapper } = require("../../profiles/index");
const UserModel = require("../../models/Users/UserModel");
const { Op } = require("sequelize");
const { NotFound } = require("http-errors");

router_order.post("/order", createOrder);
router_order.get("/order/:id", getOrder);
router_order.put("/order/:id", updateOrder);
router_order.delete("/order/:id", deleteOrder);
router_order.get("/order/allorder/:id", getAllOrder);

async function createOrder(req, res, next) {
    try {
        const {
            id_item,
            item_name,
            quantity_item,
            item_price,
            total_price,
            id_user,
        } = req.body;

        const user = await UserModel.findOne({
            where: {
                id: { [Op.eq]: id_user },
            },
        });

        if (!user) {
            throw new NotFound("user not found");
        }
        // console.log(JSON.stringify(user,null,2))

        const order = await OrderModel.create({
            id_item: id_item,
            item_name: item_name,
            quantity_item: quantity_item,
            item_price: item_price,
            total_price: total_price,
            id_user: id_user,
        });
        const getOrder = await OrderModel.findOne({
            where: {
                id_order: { [Op.eq]: order.getDataValue("id_order") },
            },
            attributes: ["id_item", "total_price", "id_order"],
            include: [
                {
                    model: UserModel,
                    attributes: ["id", "name"],
                },
            ],
        });

        res.status(201).json(getOrder);
    } catch (error) {
        next(error);
    }
}

async function updateOrder(req, res, next) {
    try {
        const {
            id_item,
            item_name,
            quantity_item,
            item_price,
            total_price,
            id_user,
        } = req.body;

        const id_order = req.params.id;

        const user = await UserModel.findOne({
            where: {
                id: { [Op.eq]: id_user },
            },
        });

        if (!user) {
            throw new NotFound("user not found");
        }
        // console.log(JSON.stringify(user,null,2))

        const order = await OrderModel.update(
            {
                id_item: id_item,
                item_name: item_name,
                quantity_item: quantity_item,
                item_price: item_price,
                total_price: total_price,
                id_user: id_user,
            },
            {
                where: {
                    id_order: { [Op.eq]: id_order },
                },
            },
        );
        console.log(JSON.stringify(order))
        const getOrder = await OrderModel.findOne({
            where: {
                id_order: { [Op.eq]: id_order },
            },
            attributes: ["id_item", "total_price", "id_order"],
            include: [
                {
                    model: UserModel,
                    attributes: ["id", "name"],
                },
            ],
        });

        res.status(201).json(getOrder);
    } catch (error) {
        next(error);
    }
}

async function getOrder(req, res, next) {
    try {
        const id_order = req.params.id;
        console.log(id_order);
        const getOrder = await OrderModel.findOne({
            where: {
                id_order: { [Op.eq]: id_order },
            },
            attributes: ["id_item", "total_price", "id_order"],
            include: [
                {
                    model: UserModel,
                    attributes: ["id", "name"],
                },
            ],
        });
        console.log(JSON.stringify(getOrder));

        res.status(201).json(getOrder);
    } catch (error) {
        next(error);
    }
}

async function getAllOrder(req, res, next) {
    try {
        const id_user = req.params.id;
        console.log(id_user);
        const getOrder = await OrderModel.findAll({
            where: {
                id_user: { [Op.eq]: id_user},
            },
            attributes: ["id_item", "total_price", "id_order"],
            include: [
                {
                    model: UserModel,
                    attributes: ["id", "name"],
                },
            ],
        });
        console.log(JSON.stringify(getOrder));

        res.status(201).json(getOrder);
    } catch (error) {
        next(error);
    }
}



async function deleteOrder(req, res, next) {
    try {
        const id_order = req.params.id;
        console.log(id_order);
        const getOrder = await OrderModel.findOne({
            where: {
                id_order: { [Op.eq]: id_order },
            },
            attributes: ["id_item", "total_price", "id_order"],
            include: [
                {
                    model: UserModel,
                    attributes: ["id", "name"],
                },
            ],
        });
        console.log(JSON.stringify(getOrder));

        if(!getOrder){
            throw new NotFound("order not found");
        }


        await OrderModel.destroy({
            where:{
                id_order: { [Op.eq]: id_order },
            }
        })

        res.status(204).json(true);
    } catch (error) {
        next(error);
    }
}


module.exports = router_order;
