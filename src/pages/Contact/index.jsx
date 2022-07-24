import React from "react";
import {
  ContentContext,
  FooterContact,
  Header,
  HeaderNav,
} from "../../components";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";
import { bg } from "../../assets";

export default function Contact() {
  return (
    <>
      <div className="relative">
        <div className="xl:w-8/12 top-0 left-0 right-0 mx-auto absolute">
          <div className="lg:hidden">
            <Header />
          </div>
          <HeaderNav />
        </div>

        <div className="flex justify-center font-extrabold text-6xl bg-red-200 font-Raleway">
          <img src={bg} className="w-full h-96" alt="bg" />
          <div className="flex flex-wrap absolute w-2/4 justify-center items-center text-white top-0 bottom-0 my-10 translate-y-10 xl:translate-y-4">
            <span className="text-center leading-normal">HUBUNGI KAMI</span>
          </div>
        </div>
      </div>
      <svg
        className="-translate-y-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 60 1440 200"
      >
        <path
          fill="#FC1267"
          fill-opacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,181.3C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div className="xl:w-8/12 xl:mx-auto">
        <ContentContext />

        <ReactWhatsapp number="62-813-8042-6117" message="Hallo Aice Ice Cream">
          <div className="fixed bottom-14 right-6 w-72 md:w-96 cursor-pointer bg-greenz rounded-full flex justify-center items-center p-2 font-Raleway">
            <p className="text-white mr-4 text-sm md:text-xl">
              Halo, ada yang bisa kami bantu?
            </p>
            <BsWhatsapp size={25} color="#ffffff" className=""></BsWhatsapp>
          </div>
        </ReactWhatsapp>
      </div>

      <FooterContact />
    </>
  );
}
