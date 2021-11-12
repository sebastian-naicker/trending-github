import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send({
    status: 200,
    message: 'ready',
  })
})

export default app
