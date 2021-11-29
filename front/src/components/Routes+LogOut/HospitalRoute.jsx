import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const HospitalRoute = ({ children }) => {
  const auth = useSelector((state) => state.hospital);

  return auth ? children : <Navigate to="/login/hospital" />;
};
