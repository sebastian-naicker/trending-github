import express from 'express'

const app = express()

const baseUrl = '/api'

app.get(`${baseUrl}/ready`, function (req, res) {
  res.send({
    status: 200,
    message: 'ready',
  })
})

app.get(`${baseUrl}/repositories`)
app.get(`${baseUrl}/developers`)

export default app
