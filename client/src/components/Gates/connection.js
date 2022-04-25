import { useContext, useEffect } from "react";
import ConnectedUser from "../../context/user";
import { useNavigate } from "react-router-dom";

const ConnectionGate = ({ children }) => {
  const { connectedUser } = useContext(ConnectedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!connectedUser) navigate("/signin");
  }, [connectedUser]);

  return connectedUser ? children : <h1>You have to login first!</h1>;
};

export default ConnectionGate;
