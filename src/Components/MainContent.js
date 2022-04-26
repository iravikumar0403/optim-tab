import { useUser } from "../context";
import { DigitalClock } from "./DigitalClock";
import { MainFocus } from "./MainFocus";
import { GoogleSearch } from "./GoogleSearch";
import { FiEdit3 } from "react-icons/fi";

export const MainContent = () => {
  const { setOptimUser, user } = useUser();
  const editName = () => {
    localStorage.removeItem("user");
    setOptimUser("");
  };
  return (
    <>
      <div className="h-full flex items-center justify-center flex-col">
        <div className="group">
          <h1 className="text-4xl inline-block">Hey {user} </h1>
          <button
            className="text-slate-200 hidden group-hover:inline-block mx-3"
            onClick={editName}
          >
            <FiEdit3 />
          </button>
        </div>
        <DigitalClock />
        <GoogleSearch />
        <MainFocus />
      </div>
    </>
  );
};
