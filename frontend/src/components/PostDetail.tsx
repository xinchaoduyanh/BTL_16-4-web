import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BlogPostInterface } from "../model/model";

export default function PostDetail() {
  // Lấy slug từ URL bằng cách sử dụng hook useParams
  const { slug } = useParams();

  // Sử dụng useState để quản lý trạng thái của blogPost
  const [blogPost, setBlogPost] = useState<BlogPostInterface | null>(null);

  // Sử dụng useEffect để thực hiện yêu cầu HTTP khi thành phần được tải
  useEffect(() => {
    // Thực hiện yêu cầu HTTP tới API của bạn để lấy dữ liệu bài blog dựa trên slug
    axios
      .get(`http://localhost:3000/blog-posts/${slug}`)
      .then((response) => {
        // Cập nhật trạng thái blogPost với dữ liệu nhận được
        setBlogPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
        // Bạn có thể xử lý lỗi tại đây
      });
  }, [slug]); // useEffect sẽ chạy lại mỗi khi slug thay đổi

  // Kiểm tra nếu blogPost chưa có dữ liệu
  if (!blogPost) {
    return <div>Loading...</div>;
  }

  // Render chi tiết bài blog
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.description}</p>
    </div>
  );
}
