import supertest from "supertest";

import app from '../index'

const request = supertest(app)

//creating test for endpoint response
describe('testing the endpoint', () => {
    it('Get the / endpoint', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
    })
})