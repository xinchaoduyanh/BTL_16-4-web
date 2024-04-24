import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

export default function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/create-post" style={{ padding: 5 }}>
          Create New Post
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Here are the Posts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<PostDetail />} /> 
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
