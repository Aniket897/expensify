import { useExpense } from "../contexts/expenseContext";

const TotalSpend = () => {
  const exp = useExpense();

  const getTotal = (expenses) => {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
      sum += +expenses[i].amount;
    }
    return sum;
  };

  return (
    <div className="min-h-[250px] my-[50px] flex items-center justify-center flex-col border-2 border-red-500 rounded-full">
      <p className="text-gray-700">Spent Today</p>
      <div className="text-red-500 text-2xl flex items-center ">
        <span>₹ -</span>
        <span className="text-6xl font-bold mt-4">
          {`${getTotal(exp.expenses)}`.split(".")[0]}
        </span>
        <span>.{`${getTotal(exp.expenses)}`.split(".")[1] || "00"}</span>
      </div>
    </div>
  );
};

export default TotalSpend;
