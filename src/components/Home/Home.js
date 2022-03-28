import useFetch from "../../hooks/useFetch";
import BlogList from "../BlogList/BlogList";
import "./Home.css";

const Home = () => {
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
    <div className="home">
      {isPending && <div>Loading...</div>}
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

export default Home;
