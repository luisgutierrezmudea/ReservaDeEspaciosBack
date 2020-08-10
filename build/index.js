"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const reservationsRoutes_1 = __importDefault(require("./routes/reservationsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const profilesRoutes_1 = __importDefault(require("./routes/profilesRoutes"));
const librariesRoutes_1 = __importDefault(require("./routes/librariesRoutes"));
const tablesStateRoutes_1 = __importDefault(require("./routes/tablesStateRoutes"));
const reservationsStateRoutes_1 = __importDefault(require("./routes/reservationsStateRoutes"));
const tablesRoutes_1 = __importDefault(require("./routes/tablesRoutes"));
const imgFlatRoutes_1 = __importDefault(require("./routes/imgFlatRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/reservas', reservationsRoutes_1.default);
        this.app.use('/api/usuarios', usersRoutes_1.default);
        this.app.use('/api/perfiles', profilesRoutes_1.default);
        this.app.use('/api/bibliotecas', librariesRoutes_1.default);
        this.app.use('/api/estados_mesas', tablesStateRoutes_1.default);
        this.app.use('/api/estados_reservas', reservationsStateRoutes_1.default);
        this.app.use('/api/mesas', tablesRoutes_1.default);
        this.app.use('/api/reservas', tablesRoutes_1.default);
        this.app.use('/api/img_pisos', imgFlatRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
