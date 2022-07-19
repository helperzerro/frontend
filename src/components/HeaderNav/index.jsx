import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div className="hidden bg-blue-300 justify-around items-center md:flex">
      <a href="/" className="">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>

      <div className="flex w-9/12 flex-row-reverse pr-10">
        <ul className="flex justify-between w-7/12">
          <li className="my-6 text-2xl text-dark font-semibold hover:text-amber-800">
            <a href="/">Home</a>
          </li>
          <li className="my-6 text-2xl text-dark font-semibold hover:text-amber-800">
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li className="my-6 text-2xl text-dark font-semibold hover:text-amber-800">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="my-6 text-2xl text-dark font-semibold hover:text-amber-800">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
