import React from "react";

export default function AboutContent() {
  return (
    <div>
      <div className="flex flex-wrap p-3 mb-20 justify-center items-center md:justify-between md:flex-nowrap">
        <div className="py-4 md:w-10/12">
          <h3 className="font-bold text-2xl m-4 w-9/12 border-b-4 border-tema_6">
            PROFIL KAMI
          </h3>

          <p className="m-4 text-lg">
            EKACELULLER merupakan Online dan Offline Store yang fokus menjual
            berbagai Produk Apple New dan Second serta Aksesorisnya.
          </p>
          <p className="m-4 text-lg">
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

      <div className="flex flex-wrap p-3 justify-center items-center md:justify-between md:flex-nowrap">
        <div className="md:flex md:justify-center px-6">
          <img
            src="https://sukabumiupdate.com/uploads/news/images/770x413/google_220221172426-551.jpg"
            alt="Aice"
            className="object-cover w-full h-80"
          />
        </div>

        <div className="py-4 md:w-10/12">
          <div>
            <h3 className="font-bold text-2xl m-2  text-center">VISI</h3>

            <p className="mx-4 mb-8 text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              esse dicta laudantium officia ad. Vero delectus perferendis
              officia repellat facere.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl m-2 text-center">MISI</h3>

            <p className="mx-4 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate eaque obcaecati quo repellendus officia ullam, ab
              aliquam dignissimos dolore debitis id sapiente, tempore ratione
              expedita saepe provident rerum adipisci aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
