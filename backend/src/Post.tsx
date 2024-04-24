interface BlogPostInterface {
  title: string
  description: string
}

interface BlogPostsInterface {
  [slug: string]: BlogPostInterface
}
