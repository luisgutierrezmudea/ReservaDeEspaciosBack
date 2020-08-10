import { Request, Response, request } from 'express';
import pool from '../database';

class ImgFlatController {  
    // Tabla de  mesas
    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO img_pisos set ?', [req.body]);
        res.json({ message: 'Image saved' });
    }
    public async delete(req: Request, res: Response) :Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM img_pisos WHERE id = ?', [id]);
        res.json({message:'The image was deleted'});
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE img_pisos set ? WHERE id = ?', [req.body,id]);
        res.json({message:'The image was updated'});
    }
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM img_pisos', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    
    public async listFloor(req: Request, res: Response) {
        const { biblioteca } = req.params;
        const { piso } = req.params;        
        await pool.query('SELECT * FROM img_pisos WHERE ((id_biblioteca = ?) and (piso = ?))',[biblioteca,piso], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    
}

const imgFlatController = new ImgFlatController();
export default imgFlatController;