import express, {Application, Request, Response} from 'express'
import path from 'path'
import fs from 'fs'
import routing from './routes/index';


const app: Application = express();

const PORT = 3000

// build rout

app.use('/api', routing)


app.get('/', (req: Request, res: Response) => {
    res.status(200).send(`the server is running `)
});




// listening to server 
app.listen (PORT, () => {
    const resized = path.resolve(__dirname, '../images/done')
    if(!fs.existsSync(resized)) {
        fs.mkdirSync(resized)
    }
});


export default app;


