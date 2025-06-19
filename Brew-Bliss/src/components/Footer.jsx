import React from 'react';

const Footer = () => (
  <footer className="bg-white text-black border-t border-gray-200 py-10">
    <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{' '}
        <span className="text-[#D4AF37] font-semibold">Brew Bliss</span>. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 text-sm">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#D4AF37] transition"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#D4AF37] transition"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#D4AF37] transition"
        >
          Twitter
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

