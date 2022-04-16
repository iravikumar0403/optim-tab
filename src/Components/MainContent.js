import { useUser } from "../context/user-context";
import { DigitalClock } from "./DigitalClock";
import { MainFocus } from "./MainFocus";
import { GoogleSearch } from "./GoogleSearch";

export const MainContent = () => {
  const { user } = useUser();
  return (
    <>
      <div className="h-full flex items-center justify-center flex-col">
        <h1 className="text-4xl">Hey {user}</h1>
        <DigitalClock />
        <GoogleSearch />
        <MainFocus />
      </div>
    </>
  );
};
