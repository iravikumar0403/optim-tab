import { DigitalClock } from "./DigitalClock";
import { MainFocus } from "./MainFocus";

export const MainContent = () => {
  return (
    <>
      <div className="h-full flex items-center justify-center flex-col">
        <h1 className="text-4xl">Hey Ravi Kumar</h1>
        <DigitalClock />
        <MainFocus />
      </div>
    </>
  );
};
