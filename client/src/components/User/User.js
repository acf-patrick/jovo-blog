import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const user = sessionStorage.currentUser;

  useEffect(() => {
    if (!user) {
      console.log("redirect");
      navigate("/signin");
    } else console.log(user);
  }, []);

  return (
    <>
    <p>User : </p>
    <Routes>
      <Route path="/profile" element={<p>{user ? user.name : "Boo!"}</p>} />
      {/* <Route path="*" element={<p>Boo!</p>} /> */}
    </Routes>
    </>
  );
};

export default User;
