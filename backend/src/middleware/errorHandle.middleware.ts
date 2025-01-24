import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction // this is required otherwise the errorHandle middleware will not work 
) => {
    console.error(`Error occurred in path ${req.path}`);

    if (error instanceof SyntaxError) {
        res.status(HTTPSTATUS.BAD_REQUEST).json({
            message: "Invalid JSON format",
        });
    } else {
        res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error",
            error: error?.message || "Unknown Server Error", // Fix typo
        });
    }
};
