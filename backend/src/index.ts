import express from 'express'
import { BlogPosts } from './Post'

const app = express()
const port = 3000

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
app.get('/post', (req, res) => {
  res.send('Hello World!')
})

app.get('/blog-posts', (req, res) => {
  res.json(BlogPosts)
})
app.get('/blog-posts/:slug', (req, res) => {
  const slug = req.params.slug // Lấy slug từ URL
  const blogPost = BlogPosts[slug] // Tìm bài blog dựa trên slug

  if (blogPost) {
    // Nếu tìm thấy bài blog, trả về nó dưới dạng JSON
    res.json(blogPost)
  } else {
    // Nếu không tìm thấy, trả về trạng thái 404 (Không tìm thấy)
    res.status(404).json({ error: 'Blog post not found' })
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
