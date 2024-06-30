require("dotenv").config();
const express = require("express");
const session = require('express-session');
const cors = require("cors");
const errorHandler = require("./utils/Helper/ErrorHandler");
const responseHandler = require("./utils/Helper/ResponseHandler");
const { sequelize } = require("./configs/Database");
const userRouter = require("./routes/Users/UserRouter");
const cartRouter = require("./routes/cart/cartRouter");

const app = express();

// Konfigurasi express-session
app.use(session({
    secret: 'sekret', // Ganti ini dengan kunci rahasia yang lebih aman di produksi
    resave: false,
    saveUninitialized: false
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(responseHandler);

app.use("/api/v1", userRouter);
// app.use("/api/v1", ProductRouter);
app.use("/api/v1", cartRouter);
// app.use("/api/v1", productRouter);
// const hashPasswordMiddleware = async (req, res, next) => {
//     if (req.body.password) {
//         try {
//             const hashedPassword = await bcrypt.hash(req.body.password, 10);
//             req.body.password = hashedPassword;
//             next();
//         } catch (error) {
//             return res.status(500).json({ error: "Gagal meng-hash kata sandi" });
//         }
//     } else {
//         next();
//     }
// };

// Terapkan hashPasswordMiddleware pada rute yang memerlukan peng-hash-an kata sandi
// app.use("/api/v1/register", hashPasswordMiddleware);

// Rute
app.use("/api/v1", userRouter);

app.use(errorHandler);


sequelize
    .authenticate()
    .then(() => {
        console.log("Sequelize connected to database.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server running on port " + process.env.SERVER_PORT);
});
