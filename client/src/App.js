import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login";
import NotFound from "./components/404/NotFound";
import Signup from "./components/Signup/Signup";
import User from "./components/User/User";
import ConnectedUser from "./context/user";

function App() {
  const [connectedUser, setConnectedUser] = useReducer((value, newValue) => {
    if (newValue === null) sessionStorage.removeItem("connectedUser");
    else sessionStorage.connectedUser = JSON.stringify(newValue);
    return newValue;
  }, null);

  useEffect(() => {
    const user = sessionStorage.connectedUser;
    if (user) setConnectedUser(JSON.parse(user));
  }, []);

  return (
    <ConnectedUser.Provider value={{ connectedUser, setConnectedUser }}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/user/*" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ConnectedUser.Provider>
  );
}

export default App;
