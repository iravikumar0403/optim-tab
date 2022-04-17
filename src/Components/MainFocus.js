import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export const MainFocus = () => {
  const [focus, setFocus] = useState("");
  const [isFocusCompleted, setIsFocusCompleted] = useState(false);
  const [focusInput, setFocusInput] = useState("");

  useEffect(() => {
    if (localStorage.getItem("focus")) setFocus(localStorage.getItem("focus"));

    if (localStorage.getItem("focusCompleted"))
      setIsFocusCompleted(JSON.parse(localStorage.getItem("focusCompleted")));
  }, []);

  const handleCheckboxChange = (e) => {
    setIsFocusCompleted(e.target.checked);
    localStorage.setItem("focusCompleted", e.target.checked);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setFocus(focusInput);
      localStorage.setItem("focus", focusInput);
      setFocusInput("");
    }
  };

  const handleDelete = () => {
    localStorage.removeItem("focus");
    localStorage.removeItem("focusCompleted");
    setFocus("");
    setIsFocusCompleted(false);
  };

  return (
    <div className="mt-5">
      {focus ? (
        <div>
          <p className="text-4xl m-5 border-b">Today's focus</p>
          <div className="flex items-center justify-center border-b border-transparent hover:border-white">
            <input
              type="checkbox"
              checked={isFocusCompleted}
              onChange={handleCheckboxChange}
              className="border-slate-300 rounded h-4 w-4 mx-2"
            />
            <p
              className={`text-2xl mx-2 ${
                isFocusCompleted ? "line-through text-gray-500" : ""
              }`}
            >
              {focus}
            </p>
            <button className="text-xl mx-5" onClick={handleDelete}>
              <MdDelete />
            </button>
          </div>
        </div>
      ) : (
        <input
          className="bg-transparent text-xl px-4 py-2 w-80 focus:outline-none border-solid border-b text-center"
          type="text"
          placeholder="What's your main focus for today?"
          onChange={(e) => setFocusInput(e.target.value)}
          onKeyDown={handleKeyDown}
          value={focusInput}
        />
      )}
    </div>
  );
};
