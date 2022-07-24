import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center bg-white justify-between py-6 px-8">
      <nav>
        <section className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 group"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-black group-hover:bg-red-400"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black group-hover:bg-red-400"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black group-hover:bg-red-400"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 left-0 mt-5 ml-6 p-1 rounded-full"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-10 w-10 animate-pulse text-black hover:text-red-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <div className="ml-16 mt-16">
              <ul className="">
                <li className="my-8 text-2xl font-semibold hover:text-red-400">
                  <Link to={"/"}>HOME</Link>
                </li>
                <li className="my-8 text-2xl font-semibold hover:text-red-400">
                  <Link to={"/about"}>ABOUT</Link>
                </li>
                <li className="my-8 text-2xl font-semibold hover:text-red-400">
                  <Link to={"/contact"}>CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>

      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width:250px;
        height: 300px;
        top: 0;
        left: 0;
        animation-name:come;
        animation-duration: 0.5s;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
      }

      @keyframes come{
        from{opacity:0;
        transform:translateX(-50px)}
        to{opacity:1;}
      }
      
    `}</style>
    </div>
  );
}
