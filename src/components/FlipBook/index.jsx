import { React, useRef } from "react";
import { Image1, Image2, Image3, Image4, Image5, Image6 } from "../../assets";
import HTMLFlipBook from "react-pageflip";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function FlipBook() {
  const book = useRef();

  return (
    <>
      <div className="w-full flex items-center justify-center bg-zinc-800 h-100">
        <IoIosArrowBack
          size={120}
          color="white"
          onClick={() => book.current.pageFlip().flipPrev()}
          className="hover:bg-gray-500 translate-x-8 z-10 rounded-xl hidden md:block"
        />

        <HTMLFlipBook
          ref={book}
          width={310}
          height={400}
          mobileScrollSupport={true}
          flippingTime={500}
          size="stretch"
          minWidth={300}
          minHeight={500}
          maxWidth={500}
          maxHeight={600}
          drawShadow={false}
          className="w-1/2"
        >
          <div className="demoPage">
            <img className="img-cover" src={Image1} alt="Image1" />
          </div>
          <div className="demoPage">
            <img className="img-cover" src={Image2} alt="Image2" />
          </div>
          <div className="demoPage">
            <img className="img-cover" src={Image3} alt="Image3" />
          </div>
          <div className="demoPage">
            <img className="img-cover" src={Image4} alt="Image4" />
          </div>
          <div className="demoPage">
            <img className="img-cover" src={Image5} alt="Image5" />
          </div>

          <div className="demoPage">
            <img className="img-cover" src={Image6} alt="Image6" />
          </div>
        </HTMLFlipBook>

        <IoIosArrowForward
          size={120}
          color="white"
          onClick={() => book.current.pageFlip().flipNext()}
          className="hover:bg-gray-500 -translate-x-8 z-10 rounded-xl hidden md:block"
        />
      </div>
    </>
  );
}
