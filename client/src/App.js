import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import NotFound from "./components/404/NotFound";
import Signup from "./components/Signup/Signup";
import User from "./components/User/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/create" element={<Create />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" exact={false} element={<User />} />
            <Route
              path="test"
              element={
                <Routes>
                  <Route path="/1" element={<p>Hello world</p>} />
                  <Route path="/2" element={<p>Hello everybody</p>} />
                </Routes>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
