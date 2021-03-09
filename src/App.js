import React, { useState, useEffect } from "react";
import FirstPart from "./components/FirstPart";
import TopBar from "./components/TopBar";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <TopBar />
          <FirstPart />
        </>
      )}
    </div>
  );
};

export default App;
