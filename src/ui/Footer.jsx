import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-y-8 px-4 sm:grid-cols-3 lg:grid-cols-6">
        <div>
          <h3 className="text-base font-bold md:text-lg lg:text-xl">Home</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-gray-500 sm:text-base">
            <li>
              <Link href="/">Categories</Link>
            </li>
            <li>
              <Link href="/">Devices</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold md:text-lg lg:text-xl">Movies</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-gray-500 sm:text-base">
            <li>
              <Link href="/">Gernes</Link>
            </li>
            <li>
              <Link href="/">Trending</Link>
            </li>
            <li>
              <Link href="/">New Release</Link>
            </li>
            <li>
              <Link href="/">Popular</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold md:text-lg lg:text-xl">Shows</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-gray-500 sm:text-base">
            <li>
              <Link href="/">Gernes</Link>
            </li>
            <li>
              <Link href="/">Trending</Link>
            </li>
            <li>
              <Link href="/">New Release</Link>
            </li>
            <li>
              <Link href="/">Popular</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold md:text-lg lg:text-xl">Support</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-gray-500 sm:text-base">
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold md:text-lg lg:text-xl">
            Subscription
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-gray-500 sm:text-base">
            <li>
              <Link href="/">Plans</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold md:text-lg lg:text-xl">
            Connect With Us
          </h3>
          <ul className="mt-5 flex space-x-2.5 text-sm sm:text-base">
            <li>
              <FaFacebook className="cursor-pointer rounded-md bg-gray-100/10 p-2 text-4xl md:p-3 md:text-5xl" />
            </li>
            <li>
              <FaTwitter className="cursor-pointer rounded-md bg-gray-100/10 p-2 text-4xl md:p-3 md:text-5xl" />
            </li>
            <li>
              <FaLinkedin className="cursor-pointer rounded-md bg-gray-100/10 p-2 text-4xl md:p-3 md:text-5xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-13 pb-10">
        <p className="text-center text-sm text-gray-500 md:text-base lg:text-lg">
          &copy; 2025 Movie App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
