import sharp from 'sharp'

const resizedFunctionalty = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const fullImages = `assets/full/${filename}.jpg`
  const thumbImages = `assets/thumb/${filename}_${width}_${height}.jpg`

  await sharp(fullImages).resize(width, height).jpeg().toFile(thumbImages)
  return thumbImages
}

export default resizedFunctionalty
