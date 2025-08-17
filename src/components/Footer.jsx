import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">
          © {new Date().getFullYear()} CargoTrack. All rights reserved.
        </p>

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
      </div>
    </footer>
  );
};

export default Footer;
