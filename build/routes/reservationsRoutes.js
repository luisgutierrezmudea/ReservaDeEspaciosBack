"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservationsController_1 = __importDefault(require("../controllers/reservationsController"));
class ReservationsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Reservas
        this.router.get('/listar', reservationsController_1.default.list);
        this.router.post('/crear', reservationsController_1.default.create);
        this.router.put('/actualizar/:id', reservationsController_1.default.update);
        this.router.delete('/borrar/:id', reservationsController_1.default.delete);
        this.router.get('/listar/usuario_activas/:id', reservationsController_1.default.listOfUserActives);
        this.router.get('/listar/usuario_historico/:id', reservationsController_1.default.listOfUserHistory);
        this.router.get('/listar/activas_fecha_mesa/:fecha/:mesa', reservationsController_1.default.listActivesDateTable);
    }
}
const reservationsRoutes = new ReservationsRoutes();
exports.default = reservationsRoutes.router;
