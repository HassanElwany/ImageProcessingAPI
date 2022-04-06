import express from 'express'
import path from 'path'
import fs, { existsSync } from 'fs'
import resizedFunctionalty from '../../utilities/resizFunctionalty'

const imagesArryRouter = express.Router()

//  /api/image  + /
imagesArryRouter.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query.filename as string
    const width = Number(req.query['width'])
    const height = Number(req.query['height'])

    const inputImages = path.join(
      __dirname,
      `../../../assets/full/${filename}.jpg`
    )
    const outputImages = path.join(
      __dirname,
      `../../../assets/thumb`,
      `${filename}_${width}_${height}.jpg`
    )

    // validate params inputs
    if (!filename || !width || !height) {
      res.status(400).send(`Params must be provided as valid inputs please`)
      return
    }
    if (width <= 0 || height <= 0) {
      console.log(
        `please height an width must be provided as a positive number`
      )
      res
        .status(400)
        .send(
          `please height an width must be provided as a positive number must be provided as valid inputs se`
        )
      return
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
      console.log('Cashed')
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
