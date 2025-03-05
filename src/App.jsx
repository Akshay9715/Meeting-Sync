import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
const App = () => {
  const [onHome, setOnHome] = useState(true);
  const [onAbout, setOnAbout] = useState(false);

  return (
    <div className="bg-black h-full">
      <Header
        onHome={onHome}
        onAbout={onAbout}
        setOnAbout={setOnAbout}
        setOnHome={setOnHome}
      ></Header>
      {onHome && !onAbout && (
        <div>
          <img
            src="/ff368d33-dc45-4d0e-ad7a-8b6ab710c6dd.png"
            alt=""
            className="relative top-0 left-0 w-full h-[640px] rounded-none m-0 z-10"
          />
          <img
            src="/bef91383-3431-4fc0-9f4a-5c4aa344800e.png"
            alt=""
            className="relative bottom-5 w-full"
          />
          <img
            src="/af23ed11-c214-452b-a666-9c2f123c8c24.png"
            alt=""
            className="w-full"
          />
        </div>
      )}
      {!onHome && !onAbout && <Home></Home>}
      {!onHome && onAbout && <AboutUs></AboutUs>}
    </div>
  );
};

export default App;
