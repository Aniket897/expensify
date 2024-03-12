import { useState } from "react";
import ChooseTag from "./ChooseTag";
import { toast } from "react-hot-toast";
import { useExpense } from "../contexts/expenseContext";
import {
  getFormattedDateTimeFromTimestamp,
  getTimeFromTimestamp,
} from "../utils/time";
import { AnimatePresence, motion } from "framer-motion";

const Create = ({ close }) => {
  const [openChooseTag, setOpenChooseTag] = useState(false);
  const [tag, setTag] = useState(null);
  const [amount, setAmount] = useState();

  const exp = useExpense();

  const selectTag = (value) => {
    setTag(value);
  };

  const handleCreate = () => {
    if (!tag) {
      return toast.error("please select a tag");
    }
    if (!amount) {
      return toast.error("price should be greater than 0");
    }

    exp.addExprense({
      amount,
      tag,
      timestamps: Date.now(),
    });

    close();
  };

  const renderTagButton = () => {
    return (
      <div
        onClick={() => setOpenChooseTag(true)}
        className="text-xl text-gray-500 flex items-center justify-between gap-x-3 hover:scale-110 duration-300 cursor-pointer mt-6"
      >
        {tag && (
          <span>
            {tag.icon} {tag.title}
          </span>
        )}
        {!tag && (
          <>
            <ion-icon name="pricetag-outline"></ion-icon>
            <span>select your tag</span>
          </>
        )}
        <ion-icon name="reload-outline"></ion-icon>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000, transition: { duration: 0.5 } }}
      className="h-full flex justify-center bg-white flex-col absolute top-0 left-0 w-full items-center overflow-hidden"
    >
      <p>Today at {getTimeFromTimestamp(Date.now())}</p>
      <div>
        <input
          type="number"
          className="text-center p-4 border-b border-b-gray-300 text-6xl outline-none"
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="text-3xl text-gray-500 mt-4">
        <ion-icon name="arrow-down-outline"></ion-icon>
      </div>

      {renderTagButton()}

      <div className="flex items-center gap-x-2 mt-8">
        <button onClick={close} className="w-[100px] p-3 bg-red-200 rounded-md">
          Cancel
        </button>
        <button
          onClick={handleCreate}
          className="w-[100px] p-3 bg-black text-white rounded-md"
        >
          Next
        </button>
      </div>

      <AnimatePresence>
        {openChooseTag && (
          <ChooseTag
            selectTag={selectTag}
            close={() => {
              setOpenChooseTag(false);
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Create;
