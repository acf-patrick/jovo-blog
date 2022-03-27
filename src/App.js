import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/signin" element={<Login />} />
            <Route
              path="*"
              element={
                <p
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                  }}
                >
                  No matching route
                </p>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
