import supertest from 'supertest'
import app from '../../src/index'
import resizedFunctionalty from '../../src/utilities/resizFunctionalty'
import imagesArryRouter from '../../src/routes/api/imagesArryRouter'

//api route testing
const request = supertest(app)

//testing for endpoint functionality of resizing images

it('testing the endpoint for width and height', async () => {
  const response = await request.get(
    '/api?filename=santamonica&width=-1&height=0'
  )
  expect(response.status).toBe(500)
})

it('testing endpoint successful params', async () => {
  const response = await request.get(
    '/api?filename=santamonica.jpg&width=300&height=300'
  )
  expect(response.status).toBe(200)
})

//testing for functionality of resizing images
describe('testing for the functionality', async () => {
  it('expect img santamonica w=100, h= 100 to return thumb/santamonica_100_100.jpg', async () => {
    const theFile = await imagesArryRouter('santamonica', '100', '100')
    expect(theFile).toEqual('thumb/santamonica_100_100.jpg')
  })
  it('expect not found image to return path "file/not_found"', async () => {
    const theFile = await imagesArryRouter('santamonica1245', 'no', 'yup')
    expect(theFile).toEqual('file/not_found')
  })
})
