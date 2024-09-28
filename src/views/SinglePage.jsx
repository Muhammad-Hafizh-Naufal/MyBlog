import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Ui/Navbar";
import Footer from "../components/Ui/Footer";
import Card from "../components/Ui/Card";

export default function SingleBlogPost() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getBlogPost();
  }, [id]);

  const getBlogPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/blogs/${id}`);
      setBlog(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setError("Failed to load blog post. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="bg-radial-at-bottom bg-gradient-to-b from-ThirdColor to-SecondColor min-h-screen">
      <div>
        <img className="md:absolute md:block hidden" src="/circle.png" alt="" />
        <Navbar />
        <Card title={blog.title} url={blog.url} content={blog.description} />
        <Footer />
      </div>
    </div>
  );
}
