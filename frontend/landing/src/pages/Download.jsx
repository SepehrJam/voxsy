import { faChrome, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faLock, faBolt, faGamepad, faGift, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Download = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[--main]">Download Voxsy</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Download Voxsy on your computer, mobile, or browser and stay connected with your friends.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto slide-up">
          {/* Windows */}
          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faWindows} className="text-[--main-light]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Windows</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">Full Voxsy version for Windows</p>
            <button className="flex items-center justify-center btn-primary w-full glow-hover">
              <FontAwesomeIcon icon={faWindows} className="mr-2" />
              Download for Windows
            </button>
          </div>

          {/* Mobile */}
          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faMobile} className="text-[--main-light]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Mobile</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Voxsy app for Android and iOS
            </p>
            <button className="flex items-center justify-center btn-primary w-full glow-hover">
              <FontAwesomeIcon icon={faMobile} className="mr-2" />
              Download for Mobile
            </button>
          </div>

          {/* Browser */}
          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faChrome} className="text-[--main-light]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Browser</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Use Voxsy without downloading anything
            </p>
            <button className="flex items-center justify-center btn-primary w-full glow-hover">
              <FontAwesomeIcon icon={faChrome} className="mr-2" />
              Open in Browser
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">Why Choose Voxsy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main] transition-transform">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">High Security</h3>
              <p className="text-text-secondary">End-to-end encryption for all conversations</p>
            </div>

            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main] transition-transform">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">Fast</h3>
              <p className="text-text-secondary">Connect with minimal latency</p>
            </div>

            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main] transition-transform">
                <FontAwesomeIcon icon={faGamepad} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">Gaming</h3>
              <p className="text-text-secondary">Optimized experience for gamers</p>
            </div>

            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main] transition-transform">
                <FontAwesomeIcon icon={faGift} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">Free</h3>
              <p className="text-text-secondary">Completely free to use</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
