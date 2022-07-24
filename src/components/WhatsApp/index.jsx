import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsApp() {
  return (
    <ReactWhatsapp number="62-813-8042-6117" message="Hallo Aice Ice Cream">
      <div className="bg-greenwa w-12 h-12 rounded-lg flex justify-center items-center overflow-hidden text-white fixed bottom-12 right-6 cursor-pointer">
        <BsWhatsapp size={35} color="#fff"></BsWhatsapp>
      </div>
    </ReactWhatsapp>
  );
}
