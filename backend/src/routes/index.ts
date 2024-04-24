import express, { Request, Response } from 'express'
import BlogPostModel from '~/models'

const router = express.Router()

// Endpoint lấy tất cả các bài blog
router.get('/blog-posts', async (req, res) => {
  try {
    const blogPosts = await BlogPostModel.find()
    console.log(blogPosts)
    res.json(blogPosts)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
router.post('/new-post', async (req: Request, res: Response) => {
  const { title, description, slug } = req.body
  // Trích xuất dữ liệu từ yêu cầu
  console.log(title, description, slug)
  // Kiểm tra xem bài đăng đã tồn tại trong cơ sở dữ liệu hay không
  const existingPost = await BlogPostModel.findOne({ slug })

  if (existingPost) {
    // Nếu bài đăng đã tồn tại, cập nhật nó
    existingPost.title = title
    existingPost.description = description
    const updatedPost = await existingPost.save()
    res.json({
      message: 'Updated post successfully',
      post: updatedPost
    })
  } else {
    // Nếu bài đăng chưa tồn tại, tạo một bài đăng mới
    const newPost = await BlogPostModel.create({ title, description, slug })
    res.json({
      message: 'Created new post successfully',
      post: newPost
    })
  }
})

// Endpoint lấy một bài blog dựa trên slug
router.get('/blog-posts/:slug', async (req, res) => {
  const slug = req.params.slug
  try {
    const blogPost = await BlogPostModel.findOne({ slug })
    if (blogPost) {
      res.json(blogPost)
    } else {
      res.status(404).json({ error: 'Blog post not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
