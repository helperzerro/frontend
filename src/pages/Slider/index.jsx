import { React, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { a1, a2, a3, a4, b1, b2, b3, b4, d1, d2 } from "../../assets";
import { animated } from "react-spring";

export default function Slider() {
  const [isActive, setActive] = useState(true);

  const handleToggle = (i) => {
    if (i === 0 && isActive === true) {
      return;
    } else if (i === 4 && isActive === true) {
      return;
    }
    setActive(!isActive);
  };

  return (
    <>
      <div className="relative md:w-8/12 md:mt-10 xl:w-[700px] mx-auto">
        <div className="">
          <Carousel
            axis="vertical"
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            onChange={handleToggle}
          >
            <div className="relative overflow-hidden h-100 md:h-90">
              <img src={a2} className="h-100 md:pb-28" alt="a2" />
              <animated.div
                className={`absolute z-10 top-0 left-[8%] w-32 opacity-0 ${
                  isActive ? "animate-trans-y-bawah" : ""
                }`}
              >
                <img src={a1} alt="a1" />
              </animated.div>
              <div className="absolute z-10 top-10 left-[15%] w-3/4">
                <img
                  src={a3}
                  alt="a3"
                  className={`h-85 opacity-0 ${
                    isActive ? "animate-trans-x-kiri" : ""
                  }`}
                />
              </div>
              <div className="absolute z-20 top-1/4 left-[10%] w-10/12">
                <img
                  src={a4}
                  alt="a4"
                  className={`opacity-0 ${
                    isActive ? "animate-trans-x-kanan" : ""
                  }`}
                />
              </div>
            </div>

            <div className="relative overflow-hidden h-100 md:h-90">
              <img src={b1} className="h-100 md:pb-28" alt="b1" />
              <animated.div
                className={`absolute z-10 top-0 left-[8%] w-32 opacity-0 ${
                  isActive ? "" : "animate-trans-y-bawah"
                }`}
              >
                <img src={a1} alt="a1" />
              </animated.div>
              <div className="absolute z-20 top-14 w-full">
                <img
                  src={b2}
                  alt="b2"
                  className={`h-75 opacity-0 ${
                    isActive ? "" : "animate-trans-x-kiri"
                  }`}
                />
              </div>
              <div className="absolute z-10 top-14 left-40">
                <img
                  src={b3}
                  alt="b3"
                  className={`h-[180px] w-[180px] lg:h-[250px] lg:w-[250px] opacity-0 ${
                    isActive ? "" : "animate-trans-x-kanan"
                  }`}
                />
              </div>
              <div className="absolute z-10 top-0 w-3/4">
                <img
                  src={b4}
                  alt="b4"
                  className={`w-3/4 h-85 opacity-0 ${
                    isActive ? "" : "animate-trans-y-atas"
                  }`}
                />
              </div>
            </div>

            <div className="relative overflow-hidden h-100 md:h-90">
              <img src={d1} className="h-100 md:pb-28" alt="d1" />
              <animated.div
                className={`absolute z-10 top-0 left-[8%] w-32 opacity-0 ${
                  isActive ? "animate-trans-y-bawah" : ""
                }`}
              >
                <img src={a1} alt="a1" />
              </animated.div>
              <div className="absolute z-10 top-5 right-5">
                <img
                  src={b3}
                  alt="b3"
                  className={`h-[150px] w-[150px] lg:h-[180px] lg:w-[180px] opacity-0 ${
                    isActive ? "animate-trans-x-kiri" : ""
                  }`}
                />
              </div>
              <div className="absolute z-10 -bottom-40 left-28 w-3/4">
                <img
                  src={d2}
                  alt="d2"
                  className={`w-3/4 opacity-0 ${
                    isActive ? "animate-trans-zoom" : ""
                  }`}
                />
              </div>
            </div>

            <div className="relative overflow-hidden h-100 md:h-90">
              <img src={b1} className="h-100 md:pb-28" alt="b1" />
              <animated.div
                className={`absolute z-10 top-0 left-[8%] w-32 opacity-0 ${
                  isActive ? "" : "animate-trans-y-bawah"
                }`}
              >
                <img src={a1} alt="a1" />
              </animated.div>
              <div className="absolute z-20 top-14 w-full">
                <img
                  src={b2}
                  alt="b2"
                  className={`h-75 opacity-0 ${
                    isActive ? "" : "animate-trans-x-kiri"
                  }`}
                />
              </div>
              <div className="absolute z-10 top-14 left-40">
                <img
                  src={b3}
                  alt="b3"
                  className={`h-[180px] w-[180px] lg:h-[250px] lg:w-[250px] opacity-0 ${
                    isActive ? "" : "animate-trans-x-kanan"
                  }`}
                />
              </div>
              <div className="absolute z-10 top-0 w-3/4">
                <img
                  src={b4}
                  alt="b4"
                  className={`w-3/4 h-85 opacity-0 ${
                    isActive ? "" : "animate-trans-y-atas"
                  }`}
                />
              </div>
            </div>

            <div className="relative overflow-hidden h-100 md:h-90">
              <img src={b1} className="h-100 md:pb-28" alt="b1" />
              <animated.div
                className={`absolute z-10 top-0 left-[8%] w-32 opacity-0 ${
                  isActive ? "animate-trans-y-bawah" : ""
                }`}
              >
                <img src={a1} alt="a1" />
              </animated.div>
              <div className="absolute z-20 top-14 w-full">
                <img
                  src={b2}
                  alt="b2"
                  className={`h-75 opacity-0 ${
                    isActive ? "animate-trans-x-kiri" : ""
                  }`}
                />
              </div>
              <div className="absolute z-10 top-14 left-40">
                <img
                  src={b3}
                  alt="b3"
                  className={`h-[180px] w-[180px] lg:h-[250px] lg:w-[250px] opacity-0 ${
                    isActive ? "animate-trans-x-kanan" : ""
                  }`}
                />
              </div>
              <div className="absolute z-10 top-0 w-3/4">
                <img
                  src={b4}
                  alt="b4"
                  className={`w-3/4 h-85 opacity-0 ${
                    isActive ? "animate-trans-y-atas" : ""
                  }`}
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
