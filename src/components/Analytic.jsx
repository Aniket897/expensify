const Analytic = ({ title, amount }) => {
  return (
    <div className="min-h-[250px] my-[50px] flex items-center justify-center flex-col border-2 border-red-500 rounded-full">
      <p className="text-gray-700">{title}</p>
      <div className="text-red-500 text-2xl flex items-center ">
        <span>₹ -</span>
        <span className="text-6xl font-bold mt-4">{amount}</span>
        <span>.00</span>
      </div>
    </div>
  );
};

export default Analytic;
