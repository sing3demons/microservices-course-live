"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JsonWebToken {
    constructor(privateKey, publicKey) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }
    signToken(payload, expire) {
        const token = jsonwebtoken_1.default.sign(payload, this.privateKey, {
            algorithm: 'RS256',
            expiresIn: expire ? expire : '1h',
        });
        return token;
    }
    verifyToken(token) {
        const decoded = jsonwebtoken_1.default.verify(token, this.publicKey, { algorithms: ['RS256'] });
        return decoded;
    }
}
exports.default = JsonWebToken;
