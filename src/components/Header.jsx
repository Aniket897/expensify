import toast from "react-hot-toast";
import { useUser } from "../contexts/userContext";

const Header = () => {
  const user = useUser();

  const hadleLogout = () => {
    user.logout();
    toast.success("session logout successfully");
  };
  return (
    <div className="flex items-center justify-between">
      <p className="uppercase">Expensify</p>
      <p onClick={hadleLogout} className="text-2xl cursor-pointer hover:scale-125 duration-300 hover:text-red-500">
        <ion-icon name="log-out-outline"></ion-icon>
      </p>
    </div>
  );
};

export default Header;
