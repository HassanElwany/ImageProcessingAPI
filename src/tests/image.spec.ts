import supertest from 'supertest'
import app from '../index'
import resizedFunctionalty from '../utilities/resizFunctionalty'

//api route testing
const request = supertest(app)

//testing for endpoint functionality of resizing images

it('testing the /api endpoint for width and height', async () => {
  const response = await request.get('/api')
  expect(response.status).toBe(200)
})

it('testing the /api/image endpoint for width and height', async () => {
  const response = await request.get(
    '/api/image?filename=santamonica&width=-1&height=0'
  )
  expect(response.status).toBe(400)
})

it('testing endpoint successful params', async () => {
  const response = await request.get(
    '/api/image?filename=santamonica&width=300&height=300'
  )
  expect(response.status).toBe(200)
})

//testing for functionality of resizing images
describe('testing for the functionality', async () => {
  it('expect img santamonica w=100, h= 100 to return assets/thumb/santamonica_100_100.jpg', async () => {
    const theFile = await resizedFunctionalty('santamonica', 100, 100)
    expect(theFile).toEqual('assets/thumb/santamonica_100_100.jpg')
  })
})
