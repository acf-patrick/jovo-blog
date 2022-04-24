import { Routes, Route } from "react-router-dom";
import ConnectedUser from "../../context/user";
import ConnectionGate from "../Gates/connection";
import { useContext } from "react";
import Create from "../Create/Create";
import Loading from "../Loading/Loading";

const User = () => {
  const connectedUser = useContext(ConnectedUser);

  return (
    <ConnectionGate>
      <Loading>
        <Routes>
          <Route path="/write" element={<Create />} />
          <Route
            path="/profile"
            element={<h1>Hello {connectedUser.name}</h1>}
          />
          <Route path="*" element={<p>Are you lost?</p>} />
        </Routes>
      </Loading>
    </ConnectionGate>
  );
};

export default User;
