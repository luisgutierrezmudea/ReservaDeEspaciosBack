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
class ReservationsController {
    // Tabla de  mesas
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO reservas set ?', [req.body]);
            res.json({ message: 'Reservation saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM reservas WHERE id = ?', [id]);
            res.json({ message: 'The reservation was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE reservas set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The reservation was updated' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM reservas', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listOfUserActives(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM reservas WHERE (id_usuarios = ?) and (id_estado = 1)', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listOfUserHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM reservas WHERE (id_usuarios = ?)', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listActivesDateTable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mesa } = req.params;
            const { fecha } = req.params;
            yield database_1.default.query('SELECT * FROM reservas WHERE (mesa = ?) and (fecha = ?)', [mesa, fecha], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
const reservationsController = new ReservationsController();
exports.default = reservationsController;
