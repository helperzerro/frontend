import React from "react";
import { Image1, Image2, Image3, Image4 } from "../../assets";

export default function ListProduct() {
  return (
    <div className="font-Raleway grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={Image1} alt="Imagex" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Airpods MAX NEW Internasional
            </h5>
            <p className="text-gray-700 text-base mb-4">Rp7,499,000.00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={Image2} alt="Image2" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Airpods MAX NEW Internasional
            </h5>
            <p className="text-gray-700 text-base mb-4">Rp7,499,000.00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={Image3} alt="Image3" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Airpods MAX NEW Internasional
            </h5>
            <p className="text-gray-700 text-base mb-4">Rp7,499,000.00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={Image4} alt="Image4" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Airpods MAX NEW Internasional
            </h5>
            <p className="text-gray-700 text-base mb-4">Rp7,499,000.00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={Image4} alt="Image4" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Airpods MAX NEW Internasional
            </h5>
            <p className="text-gray-700 text-base mb-4">Rp7,499,000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
