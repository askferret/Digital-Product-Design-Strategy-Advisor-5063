import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} ADI Strategic Compass
        </div>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="text-sm text-gray-500 hover:text-primary-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary-600 transition">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary-600 transition">
            Help
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;