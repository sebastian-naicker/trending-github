import express from 'express'
import repositoriesMock from './mocks/repositories.json'
import developersMock from './mocks/developers.json'

const app = express()
const baseUrl = '/api'

app.get(`${baseUrl}/ready`, function (req, res) {
  res.send({
    status: 200,
    message: 'ready',
  })
})

app.get(`${baseUrl}/repositories`, function (req, res) {
  res.send(repositoriesMock)
})

app.get(`${baseUrl}/developers`, function (req, res) {
  res.send(developersMock)
})

export default app
