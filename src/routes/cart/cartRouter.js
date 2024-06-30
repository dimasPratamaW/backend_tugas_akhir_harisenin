const express = require("express");
const router_order = express.Router();
const OrderModel = require("../../models/Users/OrderModel");
const { orderDeto } = require("../../dtos/users/orderDeto");
const userRepository = require("../../repositories/Users/UserRepository");
// POST /api/v1/register - Registrasi order
router_order.post("/order", registerOrder);


async function registerOrder(req, res, next) {
    try {
        const newOrder = await takeOrder({
            id_item: req.body.id_item,
            item_name: req.body.item_name,
            quantity_item: req.body.quantity_item,
            item_price: req.body.item_price,
            total_price: req.body.total_price,
            id_user:req.body.id_user,
        });
        res.status(201).json(newOrder);
    } catch (error) {
        next(error);
    }
}


async function takeOrder(args) {
    const newOrder = createOrder({
        id_item: args.id_item,
        item_name: args.item_name,
        quantity_item: args.quantity_item,
        item_price: args.item_price,
        total_price: args.total_price,
        id_user:args.id_user
    });
        console.log(newOrder)
        return await getUserById({ id: newOrder.id_user });
}

async function getUserById(args) {
    const getOrder = await userRepository.getUserById({ id: args.id_user });

    if (!getOrder) {
        throw new NotFound("User not found");
    }
    return mapper.map(getOrder, OrderModel, orderDeto);
}

async function createOrder(orderData) {
    return await OrderModel.create(orderData);
}


// // GET /api/v1/user/:id - Mendapatkan pengguna berdasarkan ID
// router.get("/user/:id", UserController.getUserById);


module.exports = router_order;
