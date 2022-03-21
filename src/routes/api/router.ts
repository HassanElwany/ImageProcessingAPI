import express from "express";
import fs from 'fs/promises';
import { Stats } from 'fs';
import path from 'path'
import imagesProcess from "./imagesProcess";


const router = express.Router()

//determine the images route by queries 
router.get('/', async (req: express.Request, res: express.Response): Promise <void> => {

    // creating request query and parse it to integer
    const filename = req.query['filename'];

    const height = req.query['height'] ? parseInt(req.query['height'] as string, 10) : null

    const width = req.query['width'] ? parseInt(req.query['width'] as string, 10) : null

    //checking for queries input 
    if(!width || !height || !filename) {
        res.status(400).send("url must contain felid params")
        return;
    }
    //determine the image name in it path
    const pathFileImage = `${path.resolve(__dirname, `../../../images/${filename}.jpg)`)}`

    // determine the dimension of image 

    const filePathDymentionmage = `${path.resolve(__dirname, `../../../images/${filename}-${height}x${width}.jpg`)}`

    // check if file exist in images folder

    const theImage: Stats | null = await fs.stat(pathFileImage).catch(() => {
        res.status(404).send(`Image doesn't exist`)
        return null;
    })
    if (!theImage) {
        return;
    }
    // check if the resize image was already resized
    const existingImage: Stats | null = await fs.stat(filePathDymentionmage).catch(() => {
        return null;
    })

    if (existingImage) {
        fs.readFile(filePathDymentionmage).then ((theData: Buffer)=> {
            res.status(200).contentType('jpg').send(theData);
        }).catch (() => {
            res.status(500).send('Error the image already processed');
        })
    } else {
    imagesProcess.theProcess ({
            pathFileImage,
            filePathDymentionmage,
            height,
            width
        }).then((resizedImage: Buffer) => {
            res.status(200).contentType('jpg').send(resizedImage)
        }).catch (() => {
            res.status(500).send('Error the image already processed')
        })
    }

})

export default router;

