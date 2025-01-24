"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInviteCode = generateInviteCode;
const uuid_1 = require("uuid");
function generateInviteCode() {
    return (0, uuid_1.v4)().replace(/-/g, "").substring(0, 8);
}
