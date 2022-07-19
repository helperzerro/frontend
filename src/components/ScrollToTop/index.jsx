import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <IoIosArrowUp
          size={50}
          color="white"
          onClick={scrollToTop}
          className="rounded-full bg-red-400 fixed bottom-28 right-6 pb-1"
        />
      )}
    </>
  );
};

export default App;
