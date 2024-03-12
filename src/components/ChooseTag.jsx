import { motion } from "framer-motion";

const tags = [
  {
    icon: "🏠",
    title: "Home",
  },
  {
    icon: "💊",
    title: "Medical",
  },
  {
    icon: "🚗",
    title: "Transportation",
  },
  {
    icon: "🍔",
    title: "Food",
  },
  {
    icon: "🛒",
    title: "Shopping",
  },
  {
    icon: "💡",
    title: "Utilities",
  },
  {
    icon: "📚",
    title: "Education",
  },
  {
    icon: "🎉",
    title: "Entertainment",
  },
];

const ChooseTag = ({ selectTag, close }) => {
  const handleSelectTag = (value) => {
    selectTag(value);
    close();
  };

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000, transition: { duratio: 0.5 } }}
      className="bg-white absolute h-[80%] w-full top-0 left-0 flex justify-end flex-col"
    >
      <p className="text-center text-xl text-gray-500 uppercase">Expenses</p>
      <div className="grid grid-cols-4 gap-8 text-center mt-8">
        {tags.map((item, idx) => (
          <div
            onClick={() => {
              handleSelectTag(item);
            }}
            key={idx}
            className="group/item  cursor-pointer"
          >
            <p className="group-hover/item:scale-150 duration-200">
              {item.icon}
            </p>
            <span className="text-xs text-gray-500">{item.title}</span>
          </div>
        ))}
      </div>
      <button
        onClick={close}
        className="bg-black text-white rounded-md py-3 mt-4 hover:bg-gray-900"
      >
        Close
      </button>
    </motion.div>
  );
};

export default ChooseTag;
