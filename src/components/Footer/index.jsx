import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="text-center bg-black p-8 my-10">
      <p className="text-white text-xl">Whatsapp Customer Care</p>
      <div className="flex justify-center items-center">
        {/* Logo */}
        <BsWhatsapp size={40} color="#25D366" className="mr-2"></BsWhatsapp>
        {/* Nomor */}
        <h3 className="text-yellow-500 text-4xl font-semibold">
          0813-8042-6117
        </h3>
      </div>
      <p className="text-white mt-3 text-xl">(Senin-Jumat 9:00-17:00 WIB)</p>
    </div>
  );
}
