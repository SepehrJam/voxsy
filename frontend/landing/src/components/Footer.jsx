import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Email ${email} saved!`);
    setEmail("");
  };

  return (
    <footer
      dir="ltr"
      className="bg-[--color-bg-primary] border-t border-[--color-border] py-16 px-6 text-left"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 bg-[--color-main] rounded-lg flex items-center justify-center">
                <i className="fab fa-voxsy text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold bg-[--main] bg-clip-text text-transparent ml-3">
                Voxsy
              </h3>
            </div>
            <p className="text-[--color-text-secondary] leading-relaxed">
              Powered by Socket.io
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[--color-text-primary]">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/download" className="footer-link">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/security" className="footer-link">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[--color-text-primary]">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/support" className="footer-link">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[--color-text-primary]">
              Newsletter
            </h4>
            <p className="text-[--color-text-secondary] leading-relaxed mb-4">
              Enter your email to stay updated.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-md bg-[--bg-tertiary] text-[--text-primary] placeholder-[--text-muted] outline-none border border-[--bg-tertiary] hover:border-[--main]"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[--main] text-white rounded-md hover:bg-[--main-dark] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[--color-border] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[--color-text-muted]">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <Link
                to="#"
                className="hover:text-[--color-text-primary] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="hover:text-[--color-text-primary] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <div>© 2025 Voxsy. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
