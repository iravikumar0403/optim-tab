import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "./context";
import { Bottombar, MainContent, Topbar, Onboard } from "./Components";

const App = () => {
  const { user } = useUser();
  const [bgImage, setBgImage] = useState("");
  const bgStyles = {
    backgroundImage: `url('${bgImage}')`,
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&orientation=landscape`
        );
        const bg = new Image();
        bg.src = data.urls.raw;
        bg.onload = () => {
          setBgImage(data.urls.raw);
          localStorage.setItem("lastBg", data.urls.raw);
        };
        setBgImage(data.urls.thumb);
      } catch (error) {
        setBgImage(localStorage.getItem("lastBg"));
      }
    })();
  }, []);

  return (
    <div className="h-screen bg-cover bg-center text-white" style={bgStyles}>
      <div className="bg-main h-screen">
        {user ? (
          <>
            <Topbar />
            <MainContent />
            <Bottombar />
          </>
        ) : (
          <Onboard />
        )}
      </div>
    </div>
  );
};

export default App;
