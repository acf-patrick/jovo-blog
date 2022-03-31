import useFetch from "../../hooks/useFetch";
import BlogList from "../BlogList/BlogList";
import "./Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  const {
    datas: blogs,
    setDatas: setBlogs,
    isPending,
    error,
  } = useFetch("http://localhost:3001/blogs?_sort=likes&_order=desc");

  const removeBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div
      style={{
        width: "75%",
        margin: "auto",
      }}
    >
      {isPending && (
        <p className="loading">
          <span>Loading blogs</span> <FontAwesomeIcon icon={faSpinner} spin/>
        </p>
      )}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={blogs.length ? "Top blogs!" : "No blog found"}
          removeBlog={removeBlog}
        />
      )}
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "1.5rem",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Blogs;
