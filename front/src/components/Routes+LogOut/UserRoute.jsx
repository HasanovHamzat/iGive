import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const UserRoute = ({ children }) => {
  const auth = useSelector((state) => state.user);

  return auth ? children : <Navigate to="/login/user" />;
};
