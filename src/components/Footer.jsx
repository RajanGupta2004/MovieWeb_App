// src/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p>
              We provide the best reviews and ratings for the latest movies.
              Stay updated with the latest trends in the film industry.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <Link href="https://facebook.com" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="hover:underline">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          &copy; 2024 Movies Web App | Designed by Rajan Gupta
        </div>
      </div>
    </footer>
  );
};

export default Footer;
