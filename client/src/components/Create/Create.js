import { useNavigate } from "react-router-dom";
import Square from "../Square/Square";
import "./Create.css";
import Tag from "./Tag";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import config from "../../config";
import ConnectedUser from "../../context/user";

const Create = () => {
  const [tags, setTags] = useState([]);
  const { connectedUser } = useContext(ConnectedUser);

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

  const onSubmit = (e) => {
    e.preventDefault();

    let form = e.currentTarget;

    fetch(config.backendURL + "/blog", {
      method: "POST",
      body: JSON.stringify({
        title: form.title.value,
        body: form.body.value,
        tags: tags,
        author: connectedUser.name,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).catch((err) => console.log("Create : ", err));
  };

  return (
    <div
      className="create"
      style={{ animation: "create-appear 700ms ease-out" }}
    >
      <Square />
      <h1>
        Write a new blog <FontAwesomeIcon icon={faPenFancy} />
      </h1>
      <form onSubmit={onSubmit}>
        <div className="title">
          <label htmlFor="#title">Blog title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="awesome"
            required
          />
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
            placeholder="Add tags"
          />
        </div>
        <div className="body">
          <label htmlFor="#body">What inspires you today?</label>
          <br />
          <textarea name="body" id="body" rows="10" required></textarea>
        </div>
        <div className="submit">
          <button type="submit">Create</button>
        </div>
      </form>
      <Square />
    </div>
  );
};

export default Create;
