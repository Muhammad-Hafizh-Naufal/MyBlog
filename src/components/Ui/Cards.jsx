import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

export default function Cards() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blogs");
    console.log(response.data);

    setBlogs(response.data);
  };

  return (
    <>
      <div className="flex gap-5 justify-center items-center md:p-5 p-2 flex-wrap">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="md:w-96 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:shadow-FirstColor"
          >
            <img
              alt=""
              src={blog.url}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time className="mt-4 text-sm text-white/90">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </time>
                <Link to={`/blog/${blog.id}`}>
                  <h3 className="mt-0.5 text-lg font-poppins text-white">
                    {blog.title}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed  text-white/95">
                  {blog.description.substring(0, 100)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
