import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BlogPostsInterface } from "../model/model";

export default function PostDetail() {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPostsInterface | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/blog-posts/${slug}`)
      .then((response) => {
        setBlogPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [slug]);

  if (!blogPost) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{blogPost.title}</h1>
      <p className="mb-4">{blogPost.description}</p>
      <Link to="/posts" className="text-blue-500 hover:underline">
        Quay lại
      </Link>
    </div>
  );
}
