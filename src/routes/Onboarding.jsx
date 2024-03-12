import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

const Onboarding = () => {
  const [username, setUserName] = useState("");
  const user = useUser();

  if (user.userName) {
    return <Navigate to={"/"} />;
  }

  const handleEnter = () => {
    if (!username) {
      toast.error("please enter a username");
      return;
    }
    user.login(username);
    toast.success(`👋 welcome ${username.split(" ")[0]}`);
  };
  return (
    <div className="flex flex-col gap-y-8 min-h-screen">
      <div className="flex items-center justify-between py-4 ">
        <div>
          <img
            src="https://dailyexpense.vercel.app/_next/image?url=%2Ficon-192x192.png&w=96&q=75"
            alt=""
          />
        </div>
        <h1 className="font-extrabold text-3xl">Expensify</h1>
      </div>
      <div className="flex-1 flex gap-y-8 justify-center flex-col">
        <div>
          <p className="font-bold text-3xl text-center">
            Track and analyze your expense today with Expensify.
          </p>
          <p className="mt-4 text-gray-500">
            offer away to keep track of your financial expenses in a convenient
            and organized way. It typically allows you to input information
            about your expenses and provides tools for analyzing and
            categorizing this information to help you better understand your
            spending habits.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-2">
            {/* <label htmlFor="name">Name*</label> */}
            <input
              type="text"
              name="name"
              id="name"
              className="border-gray-400 hover:border-black border-2 p-4"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button onClick={handleEnter} className="bg-black text-white p-4">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
