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

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO usuarios set ?', [req.body]);
        res.json({ message: 'User saved' });
    }

    public async delete(req: Request, res: Response) :Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({message:'The user was deleted'});
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE usuarios set ? WHERE id = ?', [req.body,id]);
        res.json({message:'The user was updated'});
    }

    // Tabla perfiles (tipos de usuario)
    public async createP(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO perfiles set ?', [req.body]);
        res.json({ message: 'Profile saved' });
    }
    public async deleteP(req: Request, res: Response) :Promise<void>{
        const { tipo } = req.params;
        await pool.query('DELETE FROM perfiles WHERE tipo = ?', [tipo]);
        res.json({message:'The profile was deleted'});
    }
    public async updateP(req: Request, res: Response) {
        const { tipo } = req.params;
        await pool.query('UPDATE perfiles set ? WHERE tipo = ?', [req.body,tipo]);
        res.json({message:'The profile was updated'});
    }
    public async listP(req: Request, res: Response) {
        await pool.query('SELECT * FROM perfiles', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

const usersController = new UsersController();
export default usersController;