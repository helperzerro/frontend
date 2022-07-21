import React from "react";
import {
  AboutContent,
  FooterContact,
  Header,
  HeaderNav,
} from "../../components";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="bg-amber-300 xl:w-8/12 xl:mx-auto">
        <div className="lg:hidden">
          <Header />
        </div>
        <HeaderNav />

        <AboutContent />

        <ReactWhatsapp number="62-813-8042-6117" message="Hallo Aice Ice Cream">
          <div className="fixed bottom-10 right-6 w-96 cursor-pointer bg-greenz rounded-full flex justify-center items-center p-2">
            <p className="text-white mr-4 text-xl">
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
