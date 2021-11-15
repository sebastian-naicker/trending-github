import app from './server'
import supertest from 'supertest'

describe('GET /api/ready', function () {
  it('should return a ready status', async function () {
    await supertest(app)
      .get('/api/ready')
      .expect(200)
      .then((response) => {
        // Check data
        expect(response.body).toEqual({
          status: 200,
          message: 'ready',
        })
      })
  })
})
