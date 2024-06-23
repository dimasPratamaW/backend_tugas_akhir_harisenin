require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./utils/Helper/ErrorHandler");
const responseHandler = require("./utils/Helper/ResponseHandler");
const { sequelize } = require("./configs/Database");
const userRouter = require("./routes/Users/UserRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(responseHandler);

app.use("/api/v1", userRouter);
// app.use("/api/v1", ProductRouter);
// app.use("/api/v1", cartRouter);
// app.use("/api/v1", productRouter);
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
