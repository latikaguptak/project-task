import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-32 bottom-0 w-full">
      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Company Info */}
        <div>
          <img
            src="https://image.similarpng.com/very-thumbnail/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png"
            alt="Company Logo"
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm">
            Leading innovations in healthcare, we deliver high-quality
            pharmaceutical solutions for a healthier future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-blue-400">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-sm mb-2">
            <strong>Address:</strong> 123 Pharma Lane, Health City, USA
          </p>
          <p className="text-sm mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@pharmaco.com" className="hover:text-blue-400">
              info@pharmaco.com
            </a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="hover:text-blue-400">
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-8"></div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-4 flex flex-col sm:flex-row justify-between items-center px-6 text-sm">
        <p className="mb-4 sm:mb-0">© 2025 PharmaCo. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
              alt="LinkedIn"
              className="h-6 w-6 hover:opacity-80"
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg"
              alt="Twitter"
              className="h-6 w-6 hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
