import "./Blogs.css";
import useFetch from "../../hooks/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faMeh } from "@fortawesome/free-solid-svg-icons";
import oops from "../../assets/images/778e294a406890bc49c93886dc2e5f2e.gif";
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

  return (
    <>
      {isPending && (
        <div className="loading">
          <span>Loading blogs</span>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
      {error && (
        <>
          <p className="blog-loading-error">
            Oops! Error occures while loading blogs
          </p>
          <p style={{ maxWidth: "480px", margin: "auto" }}>
            <img
              src={oops}
              alt="oops"
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
          </p>
        </>
      )}
      {blogs && (
        <div className="blogs">
          <h1>
            {blogs.length ? (
              header
            ) : (
              <>
                No Blog found <FontAwesomeIcon icon={faMeh} />
              </>
            )}
          </h1>
          <div className="content">
            {blogs.map((blog, index) => (
              <BlogPreview
                blog={blog}
                key={index}
                index={index}
                remove={() => removeBlog(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
