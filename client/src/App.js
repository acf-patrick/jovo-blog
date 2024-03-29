import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

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

  // fetch user
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const user = sessionStorage.connectedUser;
    if (user) setConnectedUser(JSON.parse(user));
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);

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
              <Route
                path="/blogs"
                element={
                  <Blogs
                    header="Star what Interest you"
                    provider="http://localhost:4000/blogs"
                  />
                }
              />
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
