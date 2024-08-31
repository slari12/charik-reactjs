import React, { useState } from "react";
import Logo from "../assets/logo-horiz-charik-1.webp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  Home,
  Pricing,
  About,
  Resources,
  EmailFinder,
  Insights,
} from "../pages";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

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

              <div className="links lg:flex items-center">
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
                      className="bg-white shadow-md z-50 top-100 left-[-18px] shadow-lg w-[200px] text-[#222636] rounded-md absolute py-1 pr-2 pl-[20px]"
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                    >
                      <li className="py-3">
                        <Link to="/">Software</Link>
                      </li>
                      <li className="py-3">
                        <Link to="/email-finder">Email Finder</Link>
                      </li>
                      <li className="py-3">
                        <Link to="/email-finder">Company Search</Link>
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
                      className="bg-white shadow-md z-50 top-100 left-[-18px] shadow-lg w-[200px] text-[#222636] rounded-md absolute py-1 pr-2 pl-[20px]"
                      onMouseLeave={handleMouseLeave2}
                      onMouseEnter={handleMouseEnter2}
                    >
                      <li className="py-3">
                        <Link to="/insights">Insights</Link>
                      </li>
                      <li className="py-3">
                        <Link
                          to="https://www.charik.fr/en/help"
                          target="_blank"
                        >
                          Knowledge Base
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link to="https://charik.app/verify" target="_blank">
                          SDF Tester
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                <Link
                  target="_blank"
                  to="https://www.charik.fr/meetings/jimmy5/demo?hsLang=en&uuid=a77fb010-6ef0-4f57-b735-727ae7d597c4"
                >
                  <button className="nav_btn default_btn">Demo</button>
                </Link>
              </div>
              <label
                class="relative z-40 cursor-pointer  mobile-nav"
                for="mobile-menu"
              >
                <input class="peer hidden" type="checkbox" id="mobile-menu" />

                <FontAwesomeIcon
                  icon={faBars}
                  style={{ padding: "0" }}
                  size="xl"
                  onClick={() => setIsNavOpen(true)}
                />

                {isNavOpen && (
                  <>
                    <div class="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
                      &nbsp;
                    </div>
                    <div class="fixed top-0 left-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
                      <div class="float-right min-h-full w-[85%] bg-white pl-8 pr-6 pt-12 shadow-2xl block">
                        <FontAwesomeIcon
                          icon={faXmark}
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "26px",
                          }}
                          size="xl"
                        />
                        <p className=" mb-[10px]">Charik</p>
                        <ul className="ml-6">
                          <li
                            className="mb-[10px]"
                            onClick={() => setIsNavOpen(false)}
                          >
                            <Link to="/">Software</Link>
                            <br />
                          </li>
                          <li
                            className="mb-[10px]"
                            onClick={() => setIsNavOpen(false)}
                          >
                            <Link to="/email-finder">Email Finder</Link> <br />
                          </li>
                          <li
                            className="mb-[10px]"
                            onClick={() => setIsNavOpen(false)}
                          >
                            <Link to="/email-finder">Company Search</Link>{" "}
                            <br />
                          </li>
                        </ul>
                        <p
                          className="mb-[10px]"
                          onClick={() => setIsNavOpen(false)}
                        >
                          <Link to="/pricing">Pricing</Link>
                        </p>
                        <p
                          className="mb-[10px]"
                          onClick={() => setIsNavOpen(false)}
                        >
                          <Link to="/about" className="mb-[10px]">
                            About
                          </Link>
                        </p>

                        <p className="mb-[10px]">Resources</p>
                        <ul className="ml-6">
                          <li className="mb-[10px]">
                            <Link to="/insights">Insights</Link> <br />
                          </li>
                          <li className="mb-[10px]">
                            <Link
                              to="https://www.charik.fr/en/help"
                              target="_blank"
                            >
                              Knowledge Base
                            </Link>
                            <br />
                          </li>
                          <li className="mb-[10px]">
                            <Link
                              to="https://charik.app/verify"
                              target="_blank"
                            >
                              SDF Tester
                            </Link>
                            <br />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
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
            <Route path="/email-finder" element={<EmailFinder />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default Header;
