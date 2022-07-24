import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="text-center bg-tema_2 p-8">
      <p className="text-lg mb-2">Whatsapp Customer Care</p>
      <div className="flex justify-center items-center">
        {/* Logo */}
        <BsWhatsapp size={40} color="#25D366" className="mr-2"></BsWhatsapp>
        {/* Nomor */}
        <h3 className="text-2xl font-bold">0813-8042-6117</h3>
      </div>
      <p className="mt-3 text-lg">(Senin-Jumat 9:00-17:00 WIB)</p>
    </div>
  );
}
