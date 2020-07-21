import { Router } from 'express';
import librariesController from '../controllers/librariesController';
import pool from '../database';
class LibrariesRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        // bibliotecas
        this.router.get('/',librariesController.list);        
        this.router.post('/',librariesController.create);
        this.router.put('/:id',librariesController.update);
        this.router.delete('/:id',librariesController.delete);        
    }
}
const librariesRoutes = new LibrariesRoutes();
export default librariesRoutes.router;