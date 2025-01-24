"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = exports.BadRequestException = exports.NotFoundException = exports.InternalServerException = exports.HttpException = exports.AppError = void 0;
const http_config_1 = require("../config/http.config");
class AppError extends Error {
    constructor(message, statusCode = http_config_1.HTTPSTATUS.INTERNAL_SERVER_ERROR, errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
class HttpException extends AppError {
    constructor(message = "Http Exception Error", statusCode, errorCode) {
        super(message, statusCode, errorCode);
    }
}
exports.HttpException = HttpException;
class InternalServerException extends AppError {
    constructor(message = "Internal Server Error", errorCode) {
        super(message, http_config_1.HTTPSTATUS.INTERNAL_SERVER_ERROR, errorCode);
    }
}
exports.InternalServerException = InternalServerException;
class NotFoundException extends AppError {
    constructor(message = "Resource not found", errorCode) {
        super(message, http_config_1.HTTPSTATUS.NOT_FOUND, errorCode);
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends AppError {
    constructor(message = "Bad Request", errorCode) {
        super(message, http_config_1.HTTPSTATUS.BAD_REQUEST, errorCode);
    }
}
exports.BadRequestException = BadRequestException;
class UnauthorizedException extends AppError {
    constructor(message = "Unauthorized Access", errorCode) {
        super(message, http_config_1.HTTPSTATUS.UNAUTHORIZED, errorCode);
    }
}
exports.UnauthorizedException = UnauthorizedException;
