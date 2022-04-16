import { useState } from "react";
import { useUser } from "../context/user-context";

export const Onboard = () => {
  const [name, setName] = useState("");
  const { setOptimUser } = useUser();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setOptimUser(name);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-6xl mb-5">Hello, What's your name?</h1>
      <input
        className="bg-transparent px-4 py-2 w-80 focus:outline-none border-solid border-b text-4xl text-center"
        type="text"
        autoFocus
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        value={name}
      />
    </div>
  );
};
