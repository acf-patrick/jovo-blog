import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "../404/NotFound";
import ConnectedUser from "../../context/user";

const User = () => {
  const { connectedUser } = useContext(ConnectedUser);
  const navigate = useNavigate();

  console.log(connectedUser);

  // Redirect to the login page
  useEffect(() => {
    if (!connectedUser) navigate("/signin");
  }, [connectedUser, navigate]);

  if (!connectedUser) return <h1>You shall not pass</h1>;

  return (
    <>
      <p>User : </p>
      <Routes>
        <Route path="/profile" element={<p>{connectedUser.name}</p>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default User;
