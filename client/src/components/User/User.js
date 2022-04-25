import { Routes, Route, useSearchParams } from "react-router-dom";
import Create from "../Create/Create";
import UserProfile from "./Profile";
import ConnectionGate from "../Gates/connection";

const routes = [
  { path: "/profile", element: <UserProfile /> },
  { path: "/write", element: <Create /> },
  { path: "*", element: <p>Are you lost?</p> },
];

const User = () => {
  const [params] = useSearchParams();

  return params.get("name") ? (
    <UserProfile name={params.get("name")} />
  ) : (
    <ConnectionGate>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </ConnectionGate>
  );
};

export default User;
