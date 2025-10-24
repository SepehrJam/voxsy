import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faComments,
  faEnvelope,
  faPaperPlane,
  faBookOpen,
  faPlayCircle,
  faUsers,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

const Support = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text animate-pulse-glow">
            Technical Support
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed slide-up">
            We’re here to help. FAQs, guides, and 24/7 support are available for you.
          </p>
        </div>

        {/* Quick Help */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card text-center group hover-lift">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3 className="text-xl font-bold m-4 text-text-primary group-hover:text-[--main] transition-colors">
              Direct Call
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Contact our support team for an immediate response.
            </p>
            <button className="btn-primary px-6 py-3 glow-hover">
              <FontAwesomeIcon icon={faPhone} className="ml-2" />
              Call
            </button>
          </div>

          <div className="card text-center group hover-lift">
            <div
              className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
              style={{ animationDelay: '1s' }}
            >
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              Online Chat
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Chat with our support agents for instant guidance.
            </p>
            <button className="btn-primary px-6 py-3 glow-hover">
              <FontAwesomeIcon icon={faComments} className="ml-2" />
              Start Chat
            </button>
          </div>

          <div className="card text-center group hover-lift">
            <div
              className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
              style={{ animationDelay: '2s' }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              Email
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Send an email and receive a reply within 24 hours.
            </p>
            <button className="btn-primary px-6 py-3 glow-hover">
              <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
              Send Email
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Submit a Support Request</h2>
          <div className="card max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="input" />
                <input type="email" placeholder="Your Email" className="input" />
              </div>

              <select className="input">
                <option>Select Category</option>
                <option>General</option>
                <option>Technical</option>
                <option>Account</option>
                <option>Payment</option>
              </select>

              <input type="text" placeholder="Subject" className="input" />

              <textarea
                className="input resize-none"
                rows="6"
                placeholder="Describe your issue or question"
              ></textarea>

              <button className="btn-primary px-8 py-3 glow-hover w-full">
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Complete Guide
              </h3>
              <p className="text-text-secondary text-sm mb-4">Comprehensive Voxsy usage guide</p>
              <button className="btn-primary px-4 py-2 glow-hover">Read</button>
            </div>

            <div className="card text-center group hover-lift">
              <div
                className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
                style={{ animationDelay: '1s' }}
              >
                <FontAwesomeIcon icon={faPlayCircle} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Tutorial Videos
              </h3>
              <p className="text-text-secondary text-sm mb-4">Step-by-step Voxsy tutorials</p>
              <button className="btn-primary px-4 py-2 glow-hover">Watch</button>
            </div>

            <div className="card text-center group hover-lift">
              <div
                className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
                style={{ animationDelay: '2s' }}
              >
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                User Community
              </h3>
              <p className="text-text-secondary text-sm mb-4">Connect with the Voxsy community</p>
              <button className="btn-primary px-4 py-2 glow-hover">Join</button>
            </div>

            <div className="card text-center group hover-lift">
              <div
                className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
                style={{ animationDelay: '3s' }}
              >
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Service Status
              </h3>
              <p className="text-text-secondary text-sm mb-4">Check Voxsy server status</p>
              <button className="btn-primary px-4 py-2 glow-hover">Check</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
