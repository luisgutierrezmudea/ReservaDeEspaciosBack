"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imgFlatController_1 = __importDefault(require("../controllers/imgFlatController"));
class ImgFlatRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Imagenes de los pisos de las bibliotecas
        this.router.get('/listar', imgFlatController_1.default.list);
        this.router.post('/crear', imgFlatController_1.default.create);
        this.router.put('/actualizar/:id', imgFlatController_1.default.update);
        this.router.delete('/borrar/:id', imgFlatController_1.default.delete);
        this.router.get('/listar/imagenes/:biblioteca/:piso', imgFlatController_1.default.listFloor);
    }
}
const imgFlatRoutes = new ImgFlatRoutes();
exports.default = imgFlatRoutes.router;
