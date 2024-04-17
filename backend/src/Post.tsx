interface BlogPostInterface {
  title: string
  description: string
}

interface BlogPostsInterface {
  [slug: string]: BlogPostInterface
}
export const BlogPosts: BlogPostsInterface = {
  'first-blog-post': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  },
  '3-blog-post': {
    title: '3 Blog Post',
    description: 'Hello React Router v6'
  },
  '4-blog-post': {
    title: '4 Blog Post',
    description: 'Hello React Router v6'
  }
}
