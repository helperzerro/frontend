import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function ContentContext() {
  return (
    <div>
      <div className="flex flex-wrap p-3 mb-12 justify-center items-center md:justify-between md:flex-nowrap">
        <div className="text-center py-4 md:w-10/12">
          <FaMapMarkedAlt
            size={60}
            color="#000000"
            className="mx-auto"
          ></FaMapMarkedAlt>
          <h3 className="font-bold text-2xl m-4 w-9/12 mx-auto">
            Dengan senang hati kami tunggu anda di kantor kami untuk
            berkonsultasi
          </h3>
          <p className="m-4 text-xl">Alamat:</p>
          <p className="m-4 text-xl">
            Jl. Harapan II No.21, RT.5/RW.10, Cipinang Melayu, Kec. Makasar,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13620
          </p>
          <p className="text-2xl font-bold my-10">0813 8042 6117</p>
        </div>

        <div className="md:flex md:justify-center px-6">
          <img
            src="https://sukabumiupdate.com/uploads/news/images/770x413/google_220221172426-551.jpg"
            alt="Aice"
            className="object-cover w-full h-80"
          />
        </div>
      </div>
    </div>
  );
}
