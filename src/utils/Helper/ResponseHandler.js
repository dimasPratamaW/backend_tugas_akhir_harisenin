const responseHandler = (req, res, next) => {
    res.sendResponse = (data) => {
        let status;
        switch (req.method) {
            case "GET":
                status = 200;
                message = "received data";
                break;
            case "POST":
                status = 201;
                message = "created data";
                break;
            case "PUT":
                status = 200;
                message = "updated data";
                break;
            case "DELETE":
                status = 200;
                message = "deleted data";
                break;
            default:
                status = 200;
                message = "received data";
        }

        res.status(status).json({
            status: status,
            message: message,
            data: data,
        });
    };
    next();
};

module.exports = responseHandler;
