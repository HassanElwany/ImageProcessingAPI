import sharp from 'sharp'
import fs from 'fs/promises'

//creating an interface for resized image

interface ImagesProcessInter {
  width: number;
  height: number;
  pathFileImage: string;
  filePathDymentionmage: string;
}


// creating the resized image 
const theProcess = async ({
  width,
  height,
  pathFileImage,
  filePathDymentionmage,
}: ImagesProcessInter) : Promise<Buffer> => {
  const data: Buffer | null = await fs.readFile(pathFileImage).catch(() => null)
  if (!data) {
    return Promise.reject()
  }

  const theBuffer: Buffer | null = await sharp(data)
  .resize(width, height).toBuffer().catch(() => null)

  if(!theBuffer) {
    return Promise.reject()
  }
  return fs.writeFile(filePathDymentionmage, theBuffer).then(() => {
    return theBuffer
  }).catch(() => {
    return Promise.reject()
  })
}


export default {theProcess};