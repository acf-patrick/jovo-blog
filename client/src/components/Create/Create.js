import { useNavigate } from "react-router-dom";
import Square from "../Square/Square";
import "./Create.css";
import ConnectionGate from "../Gates/connection";
import Tag from "./Tag";
import { useState } from "react";

const Create = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);

  const addTag = (event) => {
    if (event.key === "Enter") {
      const input = event.currentTarget;
      const tag = input.value;
      if (tag) {
        setTags([tag, ...tags]);
        input.value = "";
      }
    }
  };

  const removeTag = (index) => {
    const newTags = tags.filter((tag, i) => i !== index);
    setTags(newTags);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let form = e.currentTarget;
    let blog = {
      title: form.title.value,
      body: form.body.value,
      // author: form.author.value,
      tags: tags,
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
    <ConnectionGate>
      <div
        className="create"
        style={{ animation: "create-appear 700ms ease-out" }}
      >
        <Square />
        <h1>Write a new blog</h1>
        <form onSubmit={onSubmit}>
          <div className="title">
            <label htmlFor="#title">Blog title</label>
            <br />
            <input type="text" name="title" id="title" placeholder="awesome" />
          </div>
          <div className="tags">
            {tags.map((tag, i) => (
              <Tag
                onRemove={() => {
                  removeTag(i);
                }}
                key={i}
              >
                {tag}
              </Tag>
            ))}
            <input
              type="text"
              name="tags"
              onKeyDown={addTag}
              placeholder="Add tag"
            />
          </div>
          <div className="body">
            <label htmlFor="#body">What inspires you today?</label>
            <br />
            <textarea name="body" id="body" rows="10"></textarea>
          </div>
          <div className="submit">
            <button type="submit">Create</button>
          </div>
        </form>
        <Square />
      </div>
    </ConnectionGate>
  );
};

export default Create;
