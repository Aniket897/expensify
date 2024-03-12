import { useEffect, useState } from "react";
import Analytic from "../components/Analytic";
import Header from "../components/Header";
import RootLayout from "../layouts/RootLayout";
import { filterResult } from "../utils/filterResult";
import { useExpense } from "../contexts/expenseContext";
import SingleExpense from "../components/SingleExpense";
import { motion } from "framer-motion";
import { useUser } from "../contexts/userContext";

const timeOptions = ["Today", "This Week", "This Month", "This Year"];

const Analytics = () => {
  const [selectedTime, setSelectedTime] = useState("Today");
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(null);
  const exp = useExpense();
  const user = useUser();

  useEffect(() => {
    handleFilter();
  }, [exp.expenses]);

  const handleFilter = () => {
    const result = filterResult(exp.expenses, selectedTime);
    setExpenses(result);
    const total = calcutateTotal(result);
    setTotalExpense(total);
  };

  const calcutateTotal = (expenses) => {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
      sum += +expenses[i].amount;
    }
    return sum;
  };

  return (
    <RootLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-[50px] h-full overflow-y-scroll no-scrollbar"
      >
        <Header />
        <p className="text-2xl capitalize font-bold py-6 text-center">👋 Hello, {user.userName}</p>
        <select
          onChange={(e) => {
            setSelectedTime(e.target.value);
            handleFilter();
          }}
          className="w-full border rounded-md text-center p-2 mt-4"
        >
          {timeOptions.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <Analytic title={`Spent ${selectedTime}`} amount={totalExpense} />
        <div className="flex flex-col gap-y-6">
          {expenses.map((item, idx) => (
            <SingleExpense expense={item} index={idx} key={idx} />
          ))}
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default Analytics;
