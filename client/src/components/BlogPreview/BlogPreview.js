import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./BlogPreview.css";

const BlogPreview = ({ blog, onClick, key }) => {
  return (
    <div
      className="blog-preview"
      style={{
        animation: `appear 600ms ease-out ${key * 300}ms backwards`,
      }}
      key={blog.id}
      id={blog.id}
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
