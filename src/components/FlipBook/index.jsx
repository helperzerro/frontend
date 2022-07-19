import { React, useRef } from "react";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Sound,
} from "../../assets";
import HTMLFlipBook from "react-pageflip";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function FlipBook() {
  const book = useRef();
  return (
    <>
      <div className="flex items-center justify-center bg-violet-700">
        <IoIosArrowBack
          size={120}
          color="white"
          onClick={() => book.current.pageFlip().flipPrev()}
          className="hover:bg-gray-300 translate-x-10 z-10 rounded-xl hidden md:block"
        />

        <HTMLFlipBook
          ref={book}
          width={400}
          height={565}
          autoSize={false}
          size="fixed"
          drawShadow={false}
          mobileScrollSupport={true}
          className="w-1/2 my-12"
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
          className="hover:bg-gray-300 -translate-x-10 z-10 rounded-xl hidden md:block"
        />
      </div>
    </>
  );
}
