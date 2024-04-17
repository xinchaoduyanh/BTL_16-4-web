import express from 'express'
import { BlogPosts } from './Post'

const app = express()
const port = 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
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
