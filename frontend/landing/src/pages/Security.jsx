import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faShieldAlt,
  faSearch,
  faKey,
  faMobileAlt,
  faUserFriends,
  faSyncAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Security = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[--main] animate-pulse-glow">
            Security & Privacy
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed slide-up">
            Your security is our top priority. We use advanced security technologies to protect your data
            and conversations.
          </p>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">Our Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                End-to-End Encryption
              </h3>
              <p className="text-text-secondary leading-relaxed">
                All your conversations are protected with encryption.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Data Protection
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Your personal information is securely stored on our servers.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Continuous Monitoring
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Our security team monitors systems 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">User Security Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Strong Password
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Use complex and unique passwords.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Two-Factor Authentication
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Enhance your account security with 2FA.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Be Cautious
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Only connect with people you trust.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faSyncAlt} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                Keep Updated
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Always keep your app up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
