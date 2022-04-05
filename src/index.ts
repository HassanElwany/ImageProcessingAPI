import express, { Request, Response } from 'express'
import routes from './routes'

const PORT = process.env.PORT || 3000
// create an instance server
const app = express()

// add routing for / path

app.use('/api', routes)

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('resize images application')
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
