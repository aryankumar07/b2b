"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEnv = (key, defaultValue = "") => {
    const value = process.env[key];
    if (value === undefined) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error(`Cannot find the key named: ${key} or the defaultValue not provided`);
    }
    return value;
};
exports.default = getEnv;
