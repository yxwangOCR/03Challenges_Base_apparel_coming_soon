import "./App.css";
import MobileLayout from "./component/MobileLayout";
import DesktopLayout from "./component/DesktopLayout";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 768 && setWidth(768);
  }, [width]);

  return (
    <>
      <div className='App'>
        {width > 768 ? <DesktopLayout /> : <MobileLayout />}
      </div>
      <Footer />
    </>
  );
}
export default App;
