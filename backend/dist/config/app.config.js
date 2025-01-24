"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const get_envs_1 = __importDefault(require("../utils/get-envs"));
const appConfig = () => {
    return {
        PORT: (0, get_envs_1.default)("PORT", "3000"),
        NODE_ENV: (0, get_envs_1.default)("NODE_ENV", "development"),
        BASE_PATH: (0, get_envs_1.default)("BASE_PATH", "/api"),
        MONGO_URI: (0, get_envs_1.default)("MONGO_URI", ""),
        SESSION_SECRET: (0, get_envs_1.default)("SESSION_SECRET"),
        SESSION_EXPIRES_IN: (0, get_envs_1.default)("SESSION_EXPIRES_IN"),
        GOOGLE_CLIENT_ID: (0, get_envs_1.default)("GOOGLE_CLIENT_ID"),
        GOOGLE_CLIENT_SECRET: (0, get_envs_1.default)("GOOGLE_CLIENT_SECRET"),
        GOOGLE_CALLBACK_URL: (0, get_envs_1.default)("GOOGLE_CALLBACK_URL"),
        FRONTEND_ORIGIN: (0, get_envs_1.default)("FRONTEND_ORIGIN", "localhost"),
        FRONTEND_GOOGLE_CALLBACK_URL: (0, get_envs_1.default)("FRONTEND_GOOGLE_CALLBACK_URL")
    };
};
exports.config = appConfig();
