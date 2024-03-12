import { useNavigate } from "react-router-dom";
import { useApp } from "../contexts/appContext";

const Footer = () => {
  const appState = useApp();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4 border-t border-t-gray-300">
      <div
        onClick={() => navigate("/")}
        className="text-center flex flex-col items-center gap-y-1 text-gray-600 group/item cursor-pointer"
      >
        <p className="group-hover/item:scale-150 duration-200">
          <ion-icon name="home-outline"></ion-icon>
        </p>
        <span>Home</span>
      </div>
      <div
        onClick={() => {
          appState.setShowCreate(true);
        }}
        className="creteButton"
      >
        <ion-icon name="add-outline"></ion-icon>
      </div>

      <div
        onClick={() => navigate("/analytics")}
        className="text-center flex flex-col items-center gap-y-1 text-gray-600 group/item cursor-pointer"
      >
        <p className="group-hover/item:scale-150 duration-200">
          <ion-icon name="analytics-outline"></ion-icon>
        </p>
        <span>analytics</span>
      </div>
    </div>
  );
};

export default Footer;
