import { Quote } from "./Quote";

export const Bottombar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center">
      <div className="p-4 text-center w-1/6"></div>
      <div className="p-4 text-center">
        <Quote />
      </div>
      <div className="p-4 text-center w-1/6"></div>
    </div>
  );
};
