import express, {Application, Request, Response} from 'express'

const app: Application = express();

const PORT = 3000

// build rout
app.get('/', (req: Request, res: Response) => {
    res.json ({
        message: 'Hello world '
    });
});

// listening to server 
app.listen (PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
});


export default app;


