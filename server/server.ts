import express from 'express'
import cors from 'cors'
import repositoriesMock from './mocks/repositories.json'
import developersMock from './mocks/developers.json'
import fetch from 'node-fetch'

const app = express()
const baseUrl = '/api'

const allowList = ['http://localhost:3000']

const isMock = process.env.MOCK_SERVER_ENABLED

const corsOptionsDelegate = function (req: any, callback: any) {
  let corsOptions
  if (allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.get(`${baseUrl}/ready`, cors(corsOptionsDelegate), function (req, res) {
  res.send({
    status: 200,
    message: 'ready',
  })
})

app.get(`${baseUrl}/repositories`, cors(corsOptionsDelegate), async function (req, res) {
  if (isMock) return res.send(repositoriesMock)
  const response = await fetch('https://gh-trending-api.herokuapp.com/repositories')
  const data = await response.json()
  res.send(data)
})

app.get(`${baseUrl}/developers`, cors(corsOptionsDelegate), async function (req, res) {
  if (isMock) return res.send(developersMock)
  const response = await fetch('https://gh-trending-api.herokuapp.com/developers')
  const data = await response.json()
  res.send(data)
})

export default app
