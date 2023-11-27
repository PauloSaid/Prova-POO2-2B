import express , { Request, Response } from 'express';
import path from 'path';
import LanceRouter from './routes/LanceRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';
import UserRouter from './routes/UserRoutes';

const app = express();
const serverPort = 3000;

app.listen(serverPort, () =>
    console.log('Server running on port: ' + serverPort)
    );


    app.get('/', function(req: Request, res: Response){
        res.sendFile(path.join(__dirname, "../src/views/index.html"))
    })
app.use(UserRouter);
app.use(LanceRouter);
app.use(LeilaoRouter);