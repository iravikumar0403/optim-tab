import { useEffect, useState } from "react";

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [hh, mm, ss] = time.toLocaleTimeString().split(":");

  return (
    <div>
      <p className="inline text-8xl">
        {hh} : {mm}
      </p>
      <span className="text-4xl"> : {ss}</span>
      <p className="text-center text-xl">{time.toDateString()}</p>
    </div>
  );
};
