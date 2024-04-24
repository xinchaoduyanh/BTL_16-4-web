import mongoose from 'mongoose'

// Define the schema for the blog post
const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true, unique: true } // Adding slug field
})

// Define the model for the blog post
const BlogPostModel = mongoose.model('posts', BlogPostSchema)
export default BlogPostModel
