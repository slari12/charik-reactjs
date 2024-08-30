import React, { useState } from "react";
import Logo from "../assets/logo-horiz-charik-1.webp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, Pricing, About, Resources } from "../pages";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };
  return (
    <>
      <BrowserRouter>
        <div className="bg-white outer_header">
          <div className="outer_header py-[18px] px-[24px]">
            <div className="flex justify-between items-center header">
              <img src={Logo} alt="" className="logo" />

              <div className="links lg:flex">
                <div
                  class="dropdown dropdown-hover relative"
                  onMouseEnter={handleMouseEnter}
                >
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href="#">Charik</a>
                  </div>
                  {isDropdownVisible && (
                    <ul
                      tabindex="0"
                      className="bg-white shadow-md z-50 top-100 left-[-18px] shadow-lg w-[200px] text-[#222636] rounded-md absolute py-1 pr-2 pl-3"
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                    >
                      <li className="py-3">
                        <Link to="/">Software</Link>
                      </li>
                      <li className="py-3">
                        <Link to="/about">Email Finder</Link>
                      </li>
                      <li className="py-3">
                        <Link to="/resources">Company Search</Link>
                      </li>
                    </ul>
                  )}
                </div>

                <Link to="/pricing">Pricing</Link>
                <Link to="/about">About</Link>
                <div
                  class="dropdown dropdown-hover relative"
                  onMouseEnter={handleMouseEnter2}
                >
                  <div
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <a href="#">Resources</a>
                  </div>

                  {isDropdownVisible2 && (
                    <ul
                      tabindex="0"
                      className="bg-white shadow-md z-50 top-100 left-[-18px] shadow-lg w-[200px] text-[#222636] rounded-md absolute py-1 pr-2 pl-3"
                      onMouseLeave={handleMouseLeave2}
                      onMouseEnter={handleMouseEnter2}
                    >
                      <li className="py-3">
                        <Link to="/">Software</Link>
                      </li>
                      <li className="py-3">
                        <Link to="/about">Email Finder</Link>
                      </li>
                      <li className="py-3">
                        <Link to="/resources">Company Search</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <label
                class="relative z-40 cursor-pointer px-3 py-6 mobile-nav"
                for="mobile-menu"
              >
                <input class="peer hidden" type="checkbox" id="mobile-menu" />
                <div class="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
                <div class="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
                  &nbsp;
                </div>
                <div class="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
                  <div class="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl block">
                    <p className="mt-[30px] mb-[10px]">Charik</p>
                    <ul className="ml-6">
                      <li className="mb-[10px]">
                        <Link to="/">Software</Link> <br />
                      </li>
                      <li className="mb-[10px]">
                        <Link to="/pricing">Email Finder</Link> <br />
                      </li>
                      <li className="mb-[10px]">
                        <Link to="/pricing">Company Search</Link> <br />
                      </li>
                    </ul>
                    <p className="mb-[10px]">
                      <Link to="/pricing">Pricing</Link>
                    </p>
                    <p className="mb-[10px]">
                      <Link to="/about" className="mb-[10px]">
                        About
                      </Link>
                    </p>

                    <p className="mb-[10px]">Resources</p>
                    <ul className="ml-6">
                      <li className="mb-[10px]">
                        <Link to="/pricing">Insights</Link> <br />
                      </li>
                      <li className="mb-[10px]">
                        <Link to="/pricing">Knowledge Base</Link> <br />
                      </li>
                      <li className="mb-[10px]">
                        <Link to="/pricing">SDF Tester</Link> <br />
                      </li>
                    </ul>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default Header;
