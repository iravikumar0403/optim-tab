import axios from "axios";
import { useEffect, useState } from "react";
import { Bottombar, MainContent, Topbar } from "./Components";

const App = () => {
  const [bgImage, setBgImage] = useState("");
  const bgStyles = {
    backgroundImage: `url('${bgImage}')`,
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&orientation=landscape`
      );
      setBgImage(data.urls.raw);
    })();
  }, []);

  return (
    <div className="h-screen bg-cover bg-center text-white" style={bgStyles}>
      <div className="bg-main h-screen">
        <Topbar />
        <MainContent />
        <Bottombar />
      </div>
    </div>
  );
};

export default App;
