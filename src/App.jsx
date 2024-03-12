import AllRoutes from "./routes/AllRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-[90%] sm:w-[400px] mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <AllRoutes />
    </div>
  );
};

export default App;
