import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';


import indexRoutes from './routes/indexRoutes';
import reservationsRoutes from './routes/reservationsRoutes';
import usersRoutes from './routes/usersRoutes';
import profilesRoutes from './routes/profilesRoutes';
import librariesRoutes from './routes/librariesRoutes';
import tablesStateRoutes from './routes/tablesStateRoutes';
import reservationsStateRoutes from './routes/reservationsStateRoutes';
import tablesRoutes from './routes/tablesRoutes';


class Server{

    public app:Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        
    }
    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/reservas',reservationsRoutes);
        this.app.use('/api/usuarios',usersRoutes);
        this.app.use('/api/perfiles',profilesRoutes);
        this.app.use('/api/bibliotecas',librariesRoutes);
        this.app.use('/api/estados_mesas',tablesStateRoutes);
        this.app.use('/api/estados_reservas',reservationsStateRoutes);
        this.app.use('/api/mesas',tablesRoutes);
        this.app.use('/api/reservas',tablesRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),() =>{
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server =new Server();
server.start();