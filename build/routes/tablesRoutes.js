"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tablesController_1 = __importDefault(require("../controllers/tablesController"));
class TablesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Mesas
        this.router.get('/listar', tablesController_1.default.list);
        this.router.post('/crear', tablesController_1.default.create);
        this.router.put('/actualizar/:id', tablesController_1.default.update);
        this.router.delete('/borrar/:id', tablesController_1.default.delete);
        this.router.get('/listar/piso/:piso', tablesController_1.default.listFloor);
        this.router.get('/listar/biblioteca/:biblioteca', tablesController_1.default.listLibrary);
        this.router.get('/listar/estado/:estado', tablesController_1.default.listState);
        this.router.get('/listar/disponibles/:fecha/:horas/:horainicio', tablesController_1.default.listAvailable);
        this.router.get('/listar/pisos/:biblioteca', tablesController_1.default.listFloors);
    }
}
const tablesRoutes = new TablesRoutes();
exports.default = tablesRoutes.router;
