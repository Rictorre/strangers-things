import react from "react";
import { useHistory } from "react-router-dom";

const Logout = ({ setIsLoggedIn, isLoggedIn, token, setToken }) => {
  const logoutUser = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(localstorage.removeitem("token"));
  };
  const history = useHistory();

  return (
    <form
      onSubmit={() => {
        logoutUser();
      }}
    >
      <button id="logOutButton" type="submit" onClick={()=> history.push("/login") }>Log Out</button>
    </form>
  );
};

export default Logout;