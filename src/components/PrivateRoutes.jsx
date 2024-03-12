import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/userContext";

const PrivateRoutes = () => {
  const user = useUser();

  if (!user.userName) {
    return <Navigate to={"/onboarding"} />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
