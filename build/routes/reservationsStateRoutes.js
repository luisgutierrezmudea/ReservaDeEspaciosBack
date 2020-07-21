"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservationsStateController_1 = __importDefault(require("../controllers/reservationsStateController"));
class ReservationsStateRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Estados de las reservaciones de las mesas
        this.router.get('/', reservationsStateController_1.default.list);
        this.router.post('/', reservationsStateController_1.default.create);
        this.router.put('/:id', reservationsStateController_1.default.update);
        this.router.delete('/:id', reservationsStateController_1.default.delete);
    }
}
const tablesStateRoutes = new ReservationsStateRoutes();
exports.default = tablesStateRoutes.router;
