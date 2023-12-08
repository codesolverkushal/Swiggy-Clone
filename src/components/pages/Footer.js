import { NavLink } from "react-router-dom";
import { LOGO_URL } from "./../../utils/constants";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 bottom-0">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <NavLink
            to="/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={LOGO_URL} class="h-8 rounded-full" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KP-Food
            </span>
          </NavLink>
          <ul class="flex flex-wrap items-center mb-6 mr-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mr-4">
              <NavLink to="/home" class="hover:underline  me-4 md:me-6">
                Home
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/about" class="hover:underline me-4 md:me-6">
                About
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/contact" class="hover:underline  me-4 md:me-6">
                Contact Us
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/" class="hover:underline">
                Landing Page
              </NavLink>
            </li>
          </ul>
        </div>

        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <button onClick={scrollToTop} className="text-white cursor-pointer focus:outline-none">
          Go To Top
        </button>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" class="hover:underline">
            Kp-Food™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
