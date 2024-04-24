import axios from "axios";
import { useEffect, useState } from "react";
import { BlogPostInterface, BlogPostsInterface } from "../model/model";

function Posts() {
  const [blogPosts, setBlogPosts] = useState<BlogPostsInterface[]>([]);

  useEffect(() => {
    axios
      .get<BlogPostsInterface[]>("http://localhost:3000/blog-posts")
      .then((res) => {
        // Cập nhật trạng thái blog khi có dữ liệu123
        setBlog(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {Object.entries(blog).map(
        ([slug, { title }]: [string, BlogPostInterface]) => (
          <div key={slug}>
            <a href={`/post/${slug}`}>{title}</a>
          </div>
        ),
      )}
    </div>
  );
}

export default Posts;
