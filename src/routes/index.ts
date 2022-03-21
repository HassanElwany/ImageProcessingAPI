import express  from 'express'

import router from './api/router'

const routing =  express.Router()


routing.use('/api/router', router)

routing.get('/',(req: express.Request, res: express.Response): void => {
      res.send(
        `<h1>Welcome to ImageProcessingApi</h1>`
      );
    }
  );


export default routing;