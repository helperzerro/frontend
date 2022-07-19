import { useState } from "react";
import { Image1 } from "../../assets";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-6 px-8">
      <nav>
        <section className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 left-0 mt-5 ml-6 p-1 rounded-full hover:bg-amber-50"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-10 w-10 animate-pulse text-amber-600"
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
              <ul className="min-h-[250px]">
                <li className="my-8 text-2xl text-dark font-semibold hover:text-amber-800">
                  <a href="/">Home</a>
                </li>
                <li className="my-8 text-2xl text-dark font-semibold hover:text-amber-800">
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li className="my-8 text-2xl text-dark font-semibold hover:text-amber-800">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="my-8 text-2xl text-dark font-semibold hover:text-amber-800">
                  <Link to={"/contact"}>Contact</Link>
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
        width:300px;
        height: 100vh;
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
        from{opacity:0;}
        to{opacity:1;}
      }
    `}</style>
    </div>
  );
}
