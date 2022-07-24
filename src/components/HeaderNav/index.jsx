import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div className="hidden bg-white justify-between items-center lg:flex lg:text-white lg:bg-transparent">
      <a href="/" className="ml-12">
        <img
          src="https://static-cse.canva.com/_next/static/assets/logo.2000x641.8144e427e90af42af7ab852ea2c24793.png"
          alt="logo"
          className="h-10"
        />
      </a>

      <div className="flex w-6/12 flex-row-reverse">
        <ul className="flex justify-around w-9/12">
          <li className="my-6 text-xl font-semibold hover:text-red-400 lg:border-b-2 lg:hover:border-red-400">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="my-6 text-xl font-semibold hover:text-red-400 lg:border-b-2 lg:hover:border-red-400">
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li className="my-6 text-xl font-semibold hover:text-red-400 lg:border-b-2 lg:hover:border-red-400">
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
