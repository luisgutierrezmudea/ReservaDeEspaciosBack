"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class ProfilesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //perfiles  de usuario
        this.router.post('/perfiles/', usersController_1.default.createP);
        this.router.get('/perfiles/', usersController_1.default.listP);
        this.router.put('/perfiles/:tipo', usersController_1.default.updateP);
        this.router.delete('/perfiles/:tipo', usersController_1.default.deleteP);
    }
}
const profilesRoutes = new ProfilesRoutes();
exports.default = profilesRoutes.router;
