import { AnimatePresence } from "framer-motion";
import Create from "../components/Create";
import Footer from "../components/Footer";
import { useApp } from "../contexts/appContext";

const RootLayout = ({ children }) => {
  /* 
  appState contains all global states of application
  */
  const appState = useApp();

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-hidden relative">
        {children}
        <AnimatePresence>
          {appState.showCreate && (
            <Create close={() => appState.setShowCreate(false)} />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
