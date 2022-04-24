import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Square from "../Square/Square";
import "./Create.css";
import ConnectedUser from "../../context/user";
import { useContext } from "react";

const Gate = ({ toShow }) => {
  const navigate = useNavigate();
  const { connectedUser } = useContext(ConnectedUser);

  useEffect(() => {
    if (!connectedUser) navigate("/signin");
  });

  return connectedUser ? toShow : <h1>Login first!</h1>
};

const Create = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    let form = e.currentTarget;
    let blog = {
      title: form.title.value,
      body: form.body.value,
      author: form.author.value,
      likes: 0,
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
    }
  };

  return (
    <Gate toShow={
      <div
        className="create"
        style={{ animation: "create-appear 700ms ease-out" }}
      >
        <Square />
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
        <Square />
      </div>
    } />
  );
};

export default Create;
