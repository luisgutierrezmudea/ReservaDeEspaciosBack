"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservationsController_1 = __importDefault(require("../controllers/reservationsController"));
class ReservationRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reservationsController_1.default.index);
    }
}
const reservationRoutes = new ReservationRoutes();
exports.default = reservationRoutes.router;
