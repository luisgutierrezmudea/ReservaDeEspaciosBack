"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profilesController_1 = __importDefault(require("../controllers/profilesController"));
class ProfilesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //perfiles  de usuario
        this.router.post('/', profilesController_1.default.createP);
        this.router.get('/', profilesController_1.default.listP);
        this.router.put('/:tipo', profilesController_1.default.updateP);
        this.router.delete('/:tipo', profilesController_1.default.deleteP);
    }
}
const profilesRoutes = new ProfilesRoutes();
exports.default = profilesRoutes.router;
