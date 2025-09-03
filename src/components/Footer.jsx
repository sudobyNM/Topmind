import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:mr-8">
            <div className="flex items-center mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center"
                style={{
                  background:
                    "conic-gradient(from 105deg, #f182d4ff 0%, #66c4bdff 60% , #83b1e5ff 80%)",
                  borderRadius: "20%",
                }}
              >
                <span className="text-white font-bold text-sm"></span>
              </div>
              <span className="ml-2 text-xl font-semibold">Topmind Care</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Mindfulness for growing minds. © 2025 Mindery Kids.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="col-span-1 md:pl-12">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className=" flex flex-row">
              <li className="mr-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Youtube
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="flex flex-row">
              <li className="mr-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
