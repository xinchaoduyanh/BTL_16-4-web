export const BlogPosts = {
  "first-blog-post": {
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },
  "second-blog-post": {
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
  "3-blog-post": {
    title: "3 Blog Post",
    description: "Hello React Router v6",
  },
  "4-blog-post": {
    title: "4 Blog Post",
    description: "Hello React Router v6",
  },
};
interface BlogPostInterface {
  title: string;
  description: string;
}
function Posts() {
  return (
    <div style={{ padding: 20 }}>
      {Object.entries(BlogPosts).map(
        ([slug, { title }]: [string, BlogPostInterface]) => (
          <div key={slug}>
            <a href={`/post/${slug}`}>{title}</a>
          </div>
        )
      )}
    </div>
  );
}
export default Posts;
