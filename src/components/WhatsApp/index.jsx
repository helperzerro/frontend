import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsApp() {
  return (
    <ReactWhatsapp number="62-813-8042-6117" message="Hallo Aice Ice Cream">
      <BsWhatsapp
        size={50}
        color="#25D366"
        className="rounded-full overflow-hidden text-white fixed bottom-10 right-6 cursor-pointer"
      ></BsWhatsapp>
    </ReactWhatsapp>
  );
}
