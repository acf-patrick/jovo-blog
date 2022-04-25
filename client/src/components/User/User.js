import { Routes, Route } from "react-router-dom";
import ConnectionGate from "../Gates/connection";
import Create from "../Create/Create";
import UserProfile from "./Profile";

const User = () => {
  return (
    <ConnectionGate>
      <Routes>
        <Route path="/write" element={<Create />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<p>Are you lost?</p>} />
      </Routes>
    </ConnectionGate>
  );
};

export default User;
