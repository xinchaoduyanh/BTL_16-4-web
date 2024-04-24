import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPostsInterface } from "../model/model";

function Posts() {
  const [blogPosts, setBlogPosts] = useState<BlogPostsInterface[]>([]);

  useEffect(() => {
    axios
      .get<BlogPostsInterface[]>("http://localhost:3000/blog-posts")
      .then((res) => {
        setBlogPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/posts/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              Bài viết: {post.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
