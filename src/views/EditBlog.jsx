import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBlogPost();
  }, []);

  const getBlogPost = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blogs/${id}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setPreview(response.data.url);
    } catch (error) {
      console.error("Failed to fetch blog post", error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.patch(
        `http://localhost:3000/blogs/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update the preview with the new image URL from the response
      if (response.data.url) {
        setPreview(response.data.url);
      }

      navigate("/");
    } catch (error) {
      console.error("Error updating blog post", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Edit Content</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Judul
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Deskripsi
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Unggah Gambar (File)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={loadImage}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {preview && (
          <figure className="md:w-44">
            <img src={preview} alt="preview" />
          </figure>
        )}
        <button
          label="save"
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBlogForm;
