import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogList.css";

const BlogList = ({ blogs, title, removeBlog }) => {
  const blogOnClick = (blog) => (e) => {
    let fadeDuration = 500;
    let elt = e.currentTarget;
    elt.style.animation = "";
    setTimeout(() => {
      elt.style.animation = `fade ${fadeDuration}ms ease-out forward`;
    }, 0);
    setTimeout(() => {
      removeBlog(blog.id);
    }, fadeDuration);
  };

  return (
    <div className="blog">
      <h2 className="blog-title">{title}</h2>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div
            className="blog-preview"
            style={{
              animation: `appear 600ms ease-out ${index * 300}ms backwards`,
            }}
            role="button"
            key={index}
            onClick={blogOnClick(blog)}
          >
            <h1 className="blog__title">{blog.title}</h1>
            <div className="blog__author">
              <span className="author">{blog.author}</span>
              <span className="likes">
                <span style={{ marginRight: "0.3rem" }}>{blog.likes}</span>
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
