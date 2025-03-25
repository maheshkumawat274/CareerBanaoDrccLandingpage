import { useEffect, useRef, useState } from "react"
import Home from "./components/home"
import Section from "./components/Section"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import TestimonialSlider from "./components/Section4"
import ApplyBtn from "./components/Applybtn"
import Loader from "./components/Loader"
import Process from "./components/Section1"


const App = () => {
  const firstComponentRef = useRef<HTMLDivElement>(null);

  const handleScrollToFirstComponent = () => {
    if (firstComponentRef.current) {
      firstComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoading(false);
          }
        };
      }
    });

    if (images.length === 0) {
      setLoading(false);
    }
  }, []);
  return (
    <>
     

    {loading ? (
        <Loader />
      ) : (
        <div>
          <Home ref={firstComponentRef}/>
          <Section/>
          <Process/>
          <Section2/>
          <Section3/>
          <div className="flex items-center justify-center overflow-hidden">
           <TestimonialSlider />
           <ApplyBtn scrollToTarget={handleScrollToFirstComponent}/>
          </div>
        </div>
      )}
    </>
  )
}

export default App