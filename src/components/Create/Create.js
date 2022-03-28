import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    let form = e.currentTarget;
    let blog = {
      title: form.title.value,
      body: form.body.value,
      author: form.author.value,
      likes: 0
    };

    if (blog.title && blog.body && blog.author) {
      await fetch("http://localhost:3001/blogs", {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-type": "application/json",
        },
      });

      navigate("/", { replace: true });
      // window.location.replace("/");
    }
  };

  return (
    <div className="create" style={{ animation: "appear 700ms ease-out" }}>
      <h1>Write a new blog</h1>
      <form onSubmit={onSubmit}>
        <p className="author">
          <label htmlFor="#author">Author</label>
          <br />
          <input
            type="text"
            name="author"
            id="author"
            placeholder="your name"
          />
        </p>
        <p className="title">
          <label htmlFor="#title">Blog title</label>
          <br />
          <input type="text" name="title" id="title" placeholder="awesome" />
        </p>
        <p className="body">
          <label htmlFor="#body">What inspires you today?</label>
          <br />
          <textarea name="body" id="body" cols="40" rows="10"></textarea>
        </p>
        <p className="submit">
          <button type="submit">Create</button>
        </p>
      </form>
    </div>
  );
};

export default Create;
