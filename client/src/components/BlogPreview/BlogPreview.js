import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./BlogPreview.css";

const BlogPreview = ({ blog, remove, index }) => {
  const removeBlog = (e) => {
    let fadeDuration = 500;
    let elt = e.currentTarget;
    elt.style.animation = "";
    setTimeout(() => {
      elt.style.animation = `blog-fade ${fadeDuration}ms ease-out`;
      setTimeout(() => {
        remove();
      }, fadeDuration);
    }, 0);
  };

  const onClick = removeBlog;

  return (
    <div
      className="blog-preview"
      style={{
        animation: `blog-appear 600ms ease-out ${index * 300}ms backwards`,
      }}
      onClick={onClick}
    >
      <h1 className="title">{blog.title}</h1>
      <div className="author">
        <span className="content">{blog.author}</span>
        <span className="likes">
          <span style={{ marginRight: "0.3rem" }}>{blog.star}</span>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
    </div>
  );
};

export default BlogPreview;
