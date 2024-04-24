import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './routes'

const app = express()
const port = 3000

// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect('mongodb+srv://vuduyanh1912:vuduyanh1912@twitter.ksyhz00.mongodb.net/16-4-fullstack-bt-web')

// Middleware để cho phép CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use(express.json())
// -------------------------------- ROUTE -------------------------//
app.use(router)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
