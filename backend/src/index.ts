import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './routes'

const app = express()
const port = 3000
//----------------------DOTENV--------------------------------------------------------//
import * as dotenv from 'dotenv'
dotenv.config()
// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect(process.env.URI as string)

// Middleware để cho phép CORS
app.use((req, res, next) => {
  // Thiết lập tiêu đề CORS cho phép mọi nguồn truy cập API
  res.header('Access-Control-Allow-Origin', '*')
  // Cho phép tất cả các phương thức HTTP
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  // Cho phép tất cả các tiêu đề
  res.header('Access-Control-Allow-Headers', '*')

  // Tiếp tục quá trình xử lý yêu cầu
  next()
})
app.use(express.json())
// -------------------------------- ROUTE -------------------------//
app.use(router)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
