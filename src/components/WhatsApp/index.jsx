import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsApp() {
  return (
    <ReactWhatsapp number="62-813-8042-6117" message="Hallo Aice Ice Cream">
      <div className="bg-greenwa w-16 h-16 rounded-full flex justify-center items-center overflow-hidden text-white fixed bottom-10 right-6 cursor-pointer">
        <BsWhatsapp size={40} color="#fff"></BsWhatsapp>
      </div>
    </ReactWhatsapp>
  );
}
