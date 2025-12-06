import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets/images";
import CommonButton from "../components/common/CommonButton";
import { CartIcon } from "../components/SVG/HomePageIcon/HomeIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/howitworks", text: "How Its Work" },
    { href: "/shopgifts", text: "Shop Gifts" },
    { href: "/forprofessionals", text: "For Professionals" },
    { href: "/bulkandautomation", text: "Bulk & Automation" },
    { href: "/about", text: "About Us" },
  ];

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  // Glass Blur on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/70 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding-x py-2 mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-12 sm:w-14 h-auto md:w-18 object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.text} className="relative group">
                  <Link
                    to={link.href}
                    className={`text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-Primary"
                        : "text-gray-700 hover:text-Primary"
                    }`}
                  >
                    {link.text}
                  </Link>

                  {/* Underline Animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-Primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
              );
            })}
          </nav>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <CommonButton className="border border-Primary text-Primary">
              Login
            </CommonButton>
            <CommonButton className="bg-custom text-white">
              Book A Setup Call
            </CommonButton>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <CartIcon />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 rounded-md hover:bg-gray-200 transition"
            >
              {!isMenuOpen ? (
                <Menu className="w-7 h-7" />
              ) : (
                <X className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* MOBILE TOP */}
          <div className="flex items-center justify-between p-4 border-b">
            <img src={logo} alt="logo" className="w-12 object-contain" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <nav className="flex-1 p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.text}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-lg rounded-md transition ${
                    isActive
                      ? "bg-gray-100 text-Primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.text}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
