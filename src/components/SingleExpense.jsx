import { useExpense } from "../contexts/expenseContext";
import { getFormattedDateTimeFromTimestamp } from "../utils/time";

const SingleExpense = ({ expense, index }) => {
  const exp = useExpense();

  const handleDelete = () => {
    exp.removeExpense(index);
  };

  return (
    <div className="flex items-center gap-x-4 border-b pb-3">
      <span className="text-3xl">{expense.tag.icon}</span>
      <div className="flex-1">
        <p className="font-bold text-xl">{expense.tag.title}</p>

        <p>{getFormattedDateTimeFromTimestamp(expense.timestamps)}</p>
      </div>
      <span className="text-red-500 font-bold text-2xl">
        ₹{expense.amount}-
      </span>
      <button
        className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-red-100 hover:bg-red-300 text-red-900 duration-300"
        onClick={handleDelete}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
};

export default SingleExpense;
