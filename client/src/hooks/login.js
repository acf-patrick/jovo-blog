import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ConnectedUser from "../context/user";
import config from "../config";

const useLogin = () => {
  const { setConnectedUser } = useContext(ConnectedUser);
  const navigate = useNavigate();

  return (username, password, err) => {
    if (!err) err = () => {};
    fetch(config.backendURL + "/login", {
      method: "POST",
      body: JSON.stringify({
        name: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // authentified
        if (data.username) {
          if (data.password) {
            // Clean data
            delete data.username;
            delete data.password;
            setConnectedUser(data.user);
            navigate("/user/profile");
          } else err("password");
        } else err("username");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export default useLogin;
