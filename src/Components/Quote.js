import axios from "axios";
import React, { useEffect, useState } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://api.quotable.io/random?maxLength=100"
      );
      setQuote(data.content);
    })();
  }, []);
  return <p className="text-3xl">{quote}</p>;
};
