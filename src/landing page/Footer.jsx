import BagongPilipinasLogo from "../assets/Bagong-Pilipinas-Logo.png";
import LogoDepEd1 from "../assets/Logo-DepEd-1.png";
import depedLogo from "../assets/deped_logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-700 text-white py-10">
      <div className="container flex items-center justify-between">
        {/* Left side: Text */}
        <p className="text-white">
          &copy; 2025 Schools Division Office of Imus City. All Rights reserved.
        </p>
        {/* Right side: Logos */}
        <div className="flex items-center space-x-4">
          <img
            src={BagongPilipinasLogo}
            alt="Bagong Pilipinas Logo"
            className="h-20"
          />
          <img src={LogoDepEd1} alt="DepEd Logo 1" className="h-16" />
          <img src={depedLogo} alt="DepEd Logo" className="h-16" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
