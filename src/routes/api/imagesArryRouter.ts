import express from 'express'
import path from 'path'
import fs, { existsSync } from 'fs'
import resizedFunctionalty from '../../utilities/resizFunctionalty'

const imagesArryRouter = express.Router()

imagesArryRouter.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query.filename as string
    const width = parseInt(req.query['width'] as string, 10)
    const height = parseInt(req.query['height'] as string, 10)

    const inputImages = path.join(__dirname, `../../../images/full/${filename}`)
    const outputImages = path.join(
      __dirname,
      `../../../images/thumb`,
      `${filename}_${width}_${height}`
    )

    // validate params inputs
    if (!filename || !width || !height) {
      res.status(400).send(`Params must be provided as valid inputs please`)
    } else if (width <= 0 || height <= 0) {
      console.log(
        `please height an width must be provided as a positive number`
      )
    }

    // validate the dir of image
    try {
      fs.existsSync(inputImages)
      console.log(`the directory is correct`)
    } catch (error) {
      if (error) {
        console.log(`dir isn't exist`)
      }
    }
    if (existsSync(outputImages)) {
      res.sendFile(outputImages)
    } else {
      try {
        await resizedFunctionalty(filename, width, height)
        res.sendFile(outputImages)
      } catch (error) {
        res.status(500).send(`can not resized image`)
      }
    }
  }
)
export default imagesArryRouter
