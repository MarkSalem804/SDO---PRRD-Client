import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { motion, AnimatePresence } from "framer-motion";
import depedLogo from "../assets/deped_logo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-4`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img
            src={depedLogo}
            alt="DepEd Logo"
            className="h-14 object-contain mr-6"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary-500">
              SDO - Imus City
            </span>
            <span className="text-sm text-neutral-500 font-normal">
              Easy Links
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 ml-10">
          <NavLinks />
          <Link
            to="/login"
            className="flex items-center space-x-2 text-neutral-800 hover:text-primary-500 transition-colors"
          >
            <VpnKeyIcon size={20} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center text-neutral-800"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container py-4 flex flex-col space-y-4">
              <NavLinks mobile />
              <Link
                to="/login"
                className="flex items-center space-x-2 py-2 text-neutral-800 hover:text-primary-500 transition-colors"
              >
                <VpnKeyIcon size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLinks = ({ mobile }) => {
  const links = [
    { text: "Data Overview", href: "#research" },
    { text: "Education Planning", href: "#educationandplanning" },
    { text: "Services", href: "#services" },
    { text: "About Us", href: "#team" },
  ];

  return links.map((link) => (
    <a
      key={link.text}
      href={link.href}
      className={`font-medium transition-colors ${
        mobile
          ? "block py-2 text-neutral-800 hover:text-primary-500"
          : "text-neutral-800 hover:text-primary-500"
      }`}
    >
      {link.text}
    </a>
  ));
};

NavLinks.propTypes = {
  mobile: PropTypes.bool,
};

export default Header;
