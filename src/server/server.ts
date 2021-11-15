import express from 'express'
import cors from 'cors'
import repositoriesMock from './mocks/repositories.json'
import developersMock from './mocks/developers.json'

const app = express()
const baseUrl = '/api'

const allowList = ['http://localhost:3000']

const corsOptionsDelegate = function (req: any, callback: any) {
  let corsOptions
  if (allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.get(`${baseUrl}/ready`, cors(corsOptionsDelegate), function (req, res) {
  res.send({
    status: 200,
    message: 'ready',
  })
})

app.get(`${baseUrl}/repositories`, cors(corsOptionsDelegate), function (req, res) {
  res.send(repositoriesMock)
})

app.get(`${baseUrl}/developers`, cors(corsOptionsDelegate), function (req, res) {
  res.send(developersMock)
})

export default app
