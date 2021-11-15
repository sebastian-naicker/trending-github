import app from './server'
import supertest from 'supertest'
import repositoriesMock from './mocks/repositories.json'
import developersMock from './mocks/developers.json'

describe('GET /api/ready', function () {
  it('should return a ready status', async function () {
    await supertest(app)
      .get('/api/ready')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          status: 200,
          message: 'ready',
        })
      })
  })
})

describe('GET /api/repositories', function () {
  it('should return correct list of repositories', async function () {
    await supertest(app)
      .get('/api/repositories')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(repositoriesMock)
      })
  })
})

describe('GET /api/developers', function () {
  it('should return correct list of developers', async function () {
    await supertest(app)
      .get('/api/developers')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(developersMock)
      })
  })
})
