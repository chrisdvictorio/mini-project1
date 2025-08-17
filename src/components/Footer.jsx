import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-5 px-8 md:px-36 bg-base-100 text-white">
      <p>© {new Date().getFullYear()} CargoTrack. All rights reserved.</p>
      <div className="flex gap-4 text-sm">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
