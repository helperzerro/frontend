import React from "react";

import { Link } from "react-router-dom";
import { Image1 } from "../../assets";

export default function HeaderDefault() {
  return (
    <div>
      <div className="w-300 hidden space-x-8 xl:flex">
        <div className="showMenuNav">
          <div className="flex flex-col p-4">
            <img src={Image1} alt="" className="w-full h-52" />
            <span className="border mt-6 border-b-amber-800"></span>
          </div>
          <div className="ml-16">
            <ul className="min-h-[250px]">
              <li className="my-8 text-2xl text-dark font-semibold hover:text-amber-800">
                <a href="/">Home</a>
              </li>
              <li className="my-8 text-2xl text-dark font-semibold hover:text-amber-800">
                <a href="/menu">Menu</a>
              </li>
              <li className="my-8 text-2xl text-dark font-semibold hover:text-amber-800">
                <a href="/about">About</a>
              </li>
              <li className="my-8 text-2xl hover:text-amber-800 text-dark font-semibold ">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
      .showMenuNav {
        display: block;
        position: absolute;
        width:300px;
        height: 100vh;
        top: 0;
        left: 0;
        animation-name:come;
        animation-duration: 1s;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
      }

      @keyframes come{
        from{opacity:0;}
        to{opacity:1;}
      }
    `}</style>
    </div>
  );
}
