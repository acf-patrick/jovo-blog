import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ConnectedUser from "../context/user";
import config from "../config";

const useConnectedUser = () => {
  const { setConnectedUser } = useContext(ConnectedUser);
  const navigate = useNavigate();

  return (username, password, displayError) =>
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
            setConnectedUser({ name: username, id: data.userID });
            navigate("/user/profile");
          } else displayError("password");
        } else displayError("username");
      })
      .catch((err) => {
        console.log(err.message);
      });
};

export default useConnectedUser;
