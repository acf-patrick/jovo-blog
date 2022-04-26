import useFetch from "../../hooks/fetch";
import "./Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import BlogPreview from "../BlogPreview/BlogPreview";

const Blogs = ({ header, provider }) => {
  const {
    datas: blogs,
    setDatas: setBlogs,
    isPending,
    error,
  } = useFetch(provider);

  const removeBlog = (blogIndex) => {
    setBlogs(blogs.filter((blog, index) => index !== blogIndex));
  };

  const blogOnClick = (blogIndex) => (e) => {
    let fadeDuration = 500;
    let elt = e.currentTarget;
    elt.style.animation = "";
    setTimeout(() => {
      elt.style.animation = `fade ${fadeDuration}ms ease-out forwards`;
      setTimeout(() => {
        removeBlog(blogIndex);
      }, fadeDuration);
    }, 0);
  };

  return (
    <>
      {isPending && (
        <div className="loading">
          <span>Loading blogs</span>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
      {blogs && (
        <div className="blogs">
          <h1>{header}</h1>
          {blogs.map((blog, index) => (
            <BlogPreview blog={blog} key={index} onClick={blogOnClick(index)} />
          ))}
        </div>
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
    </>
  );
};

export default Blogs;
