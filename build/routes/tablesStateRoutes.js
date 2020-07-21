"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tablesStateController_1 = __importDefault(require("../controllers/tablesStateController"));
class TablesStateRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Estados de las mesas
        this.router.get('/', tablesStateController_1.default.list);
        this.router.post('/', tablesStateController_1.default.create);
        this.router.put('/:id', tablesStateController_1.default.update);
        this.router.delete('/:id', tablesStateController_1.default.delete);
    }
}
const tablesStateRoutes = new TablesStateRoutes();
exports.default = tablesStateRoutes.router;
