"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_config_1 = require("../config/http.config");
const errorHandler = (error, req, res, next // this is required otherwise the errorHandle middleware will not work 
) => {
    console.error(`Error occurred in path ${req.path}`);
    if (error instanceof SyntaxError) {
        res.status(http_config_1.HTTPSTATUS.BAD_REQUEST).json({
            message: "Invalid JSON format",
        });
    }
    else {
        res.status(http_config_1.HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error",
            error: (error === null || error === void 0 ? void 0 : error.message) || "Unknown Server Error", // Fix typo
        });
    }
};
exports.errorHandler = errorHandler;
