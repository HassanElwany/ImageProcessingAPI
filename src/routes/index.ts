import express from 'express'
import imagesArryRouter from './api/imagesArryRouter'

const routes = express.Router()

routes.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('ok')
})

routes.use('/api', imagesArryRouter)

export default routes
