import express from 'express'
import imagesArryRouter from './api/imagesArryRouter'

const routes = express.Router()

// /api/

routes.use('/image', imagesArryRouter)

routes.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('ok')
})

// / mainendpoint
// / api

export default routes
