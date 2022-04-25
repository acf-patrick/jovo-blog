import ConnectedUser from "../../context/user";
import { useContext } from "react";
import ConnectionGate from "../Gates/connection";
// import Loading from "../Loading/Loading";

const UserProfile = ({ name = "" }) => {
  const { connectedUser } = useContext(ConnectedUser);

  return name ? <h1>Hello {name}</h1> : <h1>Hello {connectedUser.name}</h1>;

  // return <Loading message="Loading user profile...">Hello there</Loading>;
};

export default UserProfile;
