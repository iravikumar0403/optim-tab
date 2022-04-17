import { useState } from "react";

export const GoogleSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-10">
      <div className="border rounded flex">
        <input
          type="text"
          className="bg-transparent text-xl px-4 py-2 w-80 focus:outline-none"
          placeholder="Google Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <a
          className="flex items-center justify-center px-4 border-l"
          href={search ? `https://www.google.com/search?q=${search}` : "#"}
        >
          <svg
            className="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
