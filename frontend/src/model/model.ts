export interface BlogPostInterface {
  title: string;
  description: string;
}

export interface BlogPostsInterface {
  [slug: string]: BlogPostInterface;
}