import React, { useState, useEffect } from "react";
import Images from "../Assets/Images";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle toggling the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scrolling behavior
  const handleScroll = () => {
    // Adjust the threshold value (e.g., 100) as needed for your specific case
    const threshold = 100;
    const scrolled = window.scrollY > threshold;
    setIsScrolled(scrolled);
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-transparent ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white shadow-xl pb-2 md:pb-9 z-10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full lg:pt-12 ">
            <div className="flex items-center space-x-6 flex-shrink-0">
              <a href="#home">
                <img src={Images.logo} alt="landwind" />
              </a>
              <div className="hidden lg:block ">
                <div className=" flex items-baseline space-x-9">
                  <a
                    href="#Company"
                    className="text-gray-900  font-inter text-base font-medium leading-relaxed"
                  >
                    Company
                  </a>
                  <a
                    href="#Marketplace"
                    className="text-gray-900  font-inter text-base font-medium leading-relaxed"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#Features"
                    className="text-gray-900  font-inter text-base font-medium leading-relaxed"
                  >
                    Features
                  </a>
                  <a
                    href="#Team"
                    className="text-gray-900  font-inter text-base font-medium leading-relaxed"
                  >
                    Team
                  </a>
                  <a
                    href="#Contact"
                    className="text-gray-900  font-inter text-base font-medium leading-relaxed"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-3 ">
                <div className="cursor-pointer">
                  <h3 className="text-gray-900 font-inter text-sm font-medium leading-relaxed">
                    Log In
                  </h3>
                </div>
                <div className="rounded-lg bg-purple-600 cursor-pointer">
                  <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-2">
                    Get started
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-blue-900"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } lg:hidden fixed inset-y-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 transform`}
        id="mobile-menu"
      >
        <div className="pt-2 pl-2">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-blue-900"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-7">
          <a
            href="#Company"
            className="block text-gray-900  font-inter text-base font-medium leading-relaxed"
          >
            Company
          </a>
          <a
            href="#Marketplace"
            className="block text-gray-900  font-inter text-base font-medium leading-relaxed"
          >
            Marketplace
          </a>
          <a
            href="#Features"
            className="block text-gray-900  font-inter text-base font-medium leading-relaxed"
          >
            Features
          </a>
          <a
            href="#Team"
            className="block text-gray-900  font-inter text-base font-medium leading-relaxed"
          >
            Team
          </a>
          <a
            href="#Contact"
            className="block text-gray-900  font-inter text-base font-medium leading-relaxed"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col items-baseline p-4 space-y-7">
          <div className="cursor-pointer">
            <h3 className="text-gray-900 font-inter text-sm font-medium leading-relaxed">
              Log In
            </h3>
          </div>
          <div className="rounded-lg bg-purple-600 cursor-pointer">
            <h3 className="text-white font-inter text-sm font-medium leading-relaxed py-2 px-2">
              Get started
            </h3>
          </div>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center pt-12">
          <div>
            <a href="#home">
              <img src={Images.logo} alt="landwind" />
            </a>
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <div>
              <img src={Images.facebook} alt="" width={33} height={33} />
            </div>
            <div>
              <img src={Images.twitter} alt="" width={33} height={33} />
            </div>
            <div>
              <img src={Images.instagram} alt="" width={33} height={33} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
