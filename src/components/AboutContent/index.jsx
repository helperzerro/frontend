import React from "react";
import ReactWhatsapp from "react-whatsapp";

export default function AboutContent() {
  return (
    <div>
      <div className="flex justify-center bg-black w-full text-center font-extrabold text-white text-6xl pt-10 lg:mt-10">
        <div className="flex flex-wrap w-2/4 justify-center">
          <span className="mr-3">HUBUNGI</span>
          <span>KAMI</span>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 200">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,181.3C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div className="flex flex-wrap p-3 mb-20 justify-center items-center md:justify-between md:flex-nowrap border">
        <div className="py-4 md:w-10/12">
          <h3 className="text-white font-bold text-2xl m-4 w-9/12">
            PROFIL KAMI
          </h3>
          <div class="ml-4 w-60 border-t border-gray-400"></div>

          <p className="text-white m-4 text-xl">
            EKACELULLER merupakan Online dan Offline Store yang fokus menjual
            berbagai Produk Apple New dan Second serta Aksesorisnya.
          </p>
          <p className="text-white m-4 text-xl">
            Christian Eka memulai EKACELULLER pada 21 November 2013 sebagai
            Online shop handphone di Instagram. Seiring perkembangannya, kini
            EKACELULLER telah memiliki 3 cabang di Tangerang, Cibubur dan
            Surabaya.
          </p>
        </div>

        <div className="md:flex md:justify-center px-6">
          <img
            src="https://sukabumiupdate.com/uploads/news/images/770x413/google_220221172426-551.jpg"
            alt="Aice"
            className="object-cover w-full h-80"
          />
        </div>
      </div>

      <div className="flex flex-wrap p-3 mb-20 justify-center items-center md:justify-between md:flex-nowrap border">
        <div className="md:flex md:justify-center px-6">
          <img
            src="https://sukabumiupdate.com/uploads/news/images/770x413/google_220221172426-551.jpg"
            alt="Aice"
            className="object-cover w-full h-80"
          />
        </div>

        <div className="py-4 md:w-10/12">
          <div>
            <h3 className="text-white font-bold text-2xl m-2  text-center bg-red-100">
              VISI
            </h3>

            <p className="text-white mx-4 mb-8 text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              esse dicta laudantium officia ad. Vero delectus perferendis
              officia repellat facere.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl m-2 text-center">
              MISI
            </h3>

            <p className="text-white mx-4 text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate eaque obcaecati quo repellendus officia ullam, ab
              aliquam dignissimos dolore debitis id sapiente, tempore ratione
              expedita saepe provident rerum adipisci aut.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-black w-full text-center font-extrabold text-white lg:mt-10">
        <div className="flex flex-wrap justify-center bg-red-100 text-2xl md:flex-col md:text-3xl lg:w-11/12">
          <span className="">JANGAN LEWATKAN PENAWARAN MENARIK</span>
          <span className="">DARI AICE CREAM</span>
        </div>

        <ReactWhatsapp number="62-813-8042-6117" message="Hallo Aice Ice Cream">
          <button class="mt-6 w-52 text-xl rounded-full p-1 font-thin mx-auto ring ring-red-500">
            ORDER SEKARANG
          </button>
        </ReactWhatsapp>
      </div>
    </div>
  );
}
