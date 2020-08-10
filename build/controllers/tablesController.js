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
class TablesController {
    // Tabla de  mesas
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO mesas set ?', [req.body]);
            res.json({ message: 'Table saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM mesas WHERE id_biblioteca = ?', [id]);
            res.json({ message: 'The table was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE mesas set ? WHERE id_biblioteca = ?', [req.body, id]);
            res.json({ message: 'The table was updated' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM mesas', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listFloor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { piso } = req.params;
            yield database_1.default.query('SELECT * FROM mesas WHERE piso = ?', [piso], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listLibrary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { biblioteca } = req.params;
            yield database_1.default.query('SELECT * FROM mesas WHERE biblioteca = ?', [biblioteca], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { estado } = req.params;
            yield database_1.default.query('SELECT * FROM mesas WHERE id_estado_mesa = ?', [estado], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listAvailable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fecha } = req.params;
            const { horas } = req.params;
            const { horainicio } = req.params;
            yield database_1.default.query('SELECT * FROM mesas WHERE id_estado_mesa = ?', [fecha, horas, horainicio], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listFloors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { biblioteca } = req.params;
            yield database_1.default.query('SELECT DISTINCT piso FROM mesas WHERE biblioteca = ?', [biblioteca], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
const tablesController = new TablesController();
exports.default = tablesController;
