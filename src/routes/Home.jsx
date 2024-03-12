import Header from "../components/Header";
import SingleExpense from "../components/SingleExpense";
import TotalSpend from "../components/TotalSpend";
import { useExpense } from "../contexts/expenseContext";
import RootLayout from "../layouts/RootLayout";
import { filterResult } from "../utils/filterResult";
import { motion } from "framer-motion";

const Home = () => {
    const exp = useExpense();
   
  return (
    <RootLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-[50px] h-full overflow-y-scroll no-scrollbar"
      >
        <Header />
        <TotalSpend />
        <div className="flex flex-col gap-y-6">
          {filterResult(exp.expenses, "Today").map((item, idx) => (
            <SingleExpense expense={item} index={idx} key={idx}  />
          ))}
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default Home;
