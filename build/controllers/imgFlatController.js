"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ImgFlatController {
    // Tabla de  mesas
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO img_pisos set ?', [req.body]);
            res.json({ message: 'Image saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM img_pisos WHERE id = ?', [id]);
            res.json({ message: 'The image was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE img_pisos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The image was updated' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM img_pisos', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listFloor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { biblioteca } = req.params;
            const { piso } = req.params;
            yield database_1.default.query('SELECT * FROM img_pisos WHERE ((id_biblioteca = ?) and (piso = ?))', [biblioteca, piso], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
const imgFlatController = new ImgFlatController();
exports.default = imgFlatController;
