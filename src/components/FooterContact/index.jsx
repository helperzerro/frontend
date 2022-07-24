import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

export default function FooterContact() {
  return (
    <footer className="text-center lg:text-left bg-tema_3 text-white font-Raleway">
      <div className="py-10 text-center md:text-left  w-9/12 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="">
            <h6
              className="
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              <img src={logo} className="w-28 mr-4" alt="imagez" />
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              repellat aliquid molestias expedita illo nulla.
            </p>
          </div>

          <div className="flex justify-between md:flex-col md:justify-start md:items-center font-bold text-xl m-4">
            <p className="mb-4">
              <Link to={"/"} className="hover:text-red-400">
                HOME
              </Link>
            </p>
            <p className="mb-4">
              <Link to={"/about"} className="hover:text-red-400">
                ABOUT
              </Link>
            </p>
            <p className="mb-4">
              <Link to={"/contact"} className="hover:text-red-400">
                CONTACT
              </Link>
            </p>
          </div>

          <div className="">
            <h6 className="text-2xl font-semibold mb-4 flex justify-center -translate-x-2 md:translate-x-8">
              Follow Us
            </h6>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/aiceindonesia"
                className="mr-6 "
              >
                <FaFacebookF size={23} color="white" />
              </a>

              <a href="https://twitter.com/aiceindonesia" className="mr-6 ">
                <IoLogoTwitter size={25} color="white" />
              </a>
              <a
                href="https://www.youtube.com/c/AiceIndonesia"
                className="mr-6 "
              >
                <FaYoutube size={25} color="white" />
              </a>

              <a
                href="https://www.instagram.com/aiceindonesia/"
                className="mr-6"
              >
                <FaInstagram size={25} color="white" />
              </a>

              <a
                href="https://www.tiktok.com/@aiceindonesiaofficial"
                className="mr-6 "
              >
                <FaTiktok size={25} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-6 bg-tema_4 text-lg">
        <span>© 2022 </span>
        <a
          className="hover:text-red-400 font-semibold"
          href="https://aice-cream.netlify.app"
        >
          Aice.com
        </a>
        <span>. All Rights Reserved</span>
      </div>
    </footer>
  );
}
