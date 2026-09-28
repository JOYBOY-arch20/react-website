import React from "react";
import Button from "./ui elements/button.jsx";

const Header = () => {
  return (
    <header className="w-full bg-[#050709] h-21 px-16 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="left flex items-center w-45.25 h-14">
        <img src="./src/assets/logo.png" alt="Logo" />
      </div>

      {/* Middle: Navigation Links */}
      <nav className="md items-center justify-center">
        <ul className="flex font-sora text-[#ffffff80] gap-8">
          <li>Services</li>
          <li>Works</li>
          <li>Resume</li>
          <li>Skills</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Right: Icons & Button */}
      <div className="right flex items-center ">
        <div className="icons pr-6.25">
          <img src="./src/assets/List.png" alt="Menu Icon" />
        </div>
        <div>
          <Button Tagname={"button"}>Lets Talk</Button>
        </div>
      </div>
    </header>
    
     


  );
};

export default Header;
