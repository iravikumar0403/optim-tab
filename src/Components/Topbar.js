import { Weather } from "./Weather";

export const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center">
      <div className="p-4 text-center"></div>
      <div className="p-4 text-center">
        <Weather />
      </div>
    </div>
  );
};
