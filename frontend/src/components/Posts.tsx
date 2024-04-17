import axios from "axios";
import { useEffect, useState } from "react";
import { BlogPostInterface, BlogPostsInterface } from "../model/model";


function Posts() {
  const [blog, setBlog] = useState<BlogPostsInterface | null>(null);

  // Sử dụng useEffect để thực hiện yêu cầu HTTP
  useEffect(() => {
    // Thực hiện yêu cầu HTTP để lấy dữ liệu blog
    axios
      .get<BlogPostsInterface>("http://localhost:3000/blog-posts")
      .then((res) => {
        // Cập nhật trạng thái blog khi có dữ liệu
        setBlog(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  // Kiểm tra nếu blog chưa có dữ liệu
  if (!blog) {
    return <div>Loading...</div>;
  }

  // Render dữ liệu blog
  return (
    <div style={{ padding: 20 }}>
      {Object.entries(blog).map(
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
