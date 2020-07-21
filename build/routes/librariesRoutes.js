"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const librariesController_1 = __importDefault(require("../controllers/librariesController"));
class LibrariesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // bibliotecas
        this.router.get('/', librariesController_1.default.list);
        this.router.post('/', librariesController_1.default.create);
        this.router.put('/:id', librariesController_1.default.update);
        this.router.delete('/:id', librariesController_1.default.delete);
    }
}
const librariesRoutes = new LibrariesRoutes();
exports.default = librariesRoutes.router;
