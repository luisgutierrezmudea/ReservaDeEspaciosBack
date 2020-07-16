"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservasController_1 = __importDefault(require("../controllers/reservasController"));
class ReservationRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reservasController_1.default.index);
    }
}
const reservationRoutes = new ReservationRoutes();
exports.default = reservationRoutes.router;
