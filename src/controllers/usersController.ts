import { Request, Response } from 'express';
import pool from '../database';

class UsersController {

    // Tabla de usuarios
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM usuarios', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async findOne(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT * FROM usuarios WHERE documento = ?', [id], function (err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
                return res.json(result[0]);
            }
            res.status(404).json({ text: "The user doesn't exist" });
        });

    }
    public async findEspecialUser(req: Request, res: Response) {
        const { usuario } = req.body;
        const { contrasena } = req.body;
        await pool.query('SELECT * FROM usuarios WHERE  (documento = ?) and (usuario = ?)', [contrasena,usuario], function (err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
                return res.json(result[0]);
            }
            res.status(404).json({validado:false});
        });
    }
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO usuarios set ?', [req.body]);
        res.json({ message: 'User saved' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({ message: 'The user was deleted' });
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'The user was updated' });
    }


}

const usersController = new UsersController();
export default usersController;