import { Routes, Route } from "react-router-dom";
import NotFound from "../404/NotFound";
import ConnectionGate from "../Gates/connection";

const User = () => {
  return (
    <ConnectionGate>
      <Routes>
        <Route path="/profile" element={<h1>connectedUser.name</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ConnectionGate>
  );
};

export default User;
