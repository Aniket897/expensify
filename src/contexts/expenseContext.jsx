import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const expenseContext = createContext();

export const useExpense = () => {
  return useContext(expenseContext);
};

export default function ExprenseContextProvider({ children }) {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  const addExprense = (expense) => {
    const updateExpenses = [expense, ...expenses];
    setExpenses(updateExpenses);
    localStorage.setItem("expenses", JSON.stringify(updateExpenses));
    toast.success("expense created");
  };

  //   TODO:
  const removeExpense = (index) => {
    const updatedExpense = expenses.filter((item , idx) =>  idx !== index);
    setExpenses(updatedExpense)
  };

  return (
    <expenseContext.Provider value={{ expenses, addExprense , removeExpense }}>
      {children}
    </expenseContext.Provider>
  );
}
