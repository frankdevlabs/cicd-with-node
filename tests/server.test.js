import "core-js/stable";
import "regenerator-runtime/runtime";
import app from "../src/server.js"
import supertest from "supertest"
const request = supertest(app)

describe('GET /test', function () {
  it('it should return \'pass\'', async () => {
    const response = await request.get('/test')

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
  })
});
