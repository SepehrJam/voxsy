import {
  faHandshake,
  faLock,
  faRocket,
  faGlobeAmericas,
  faUserTie,
  faLaptopCode,
  faPalette,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[--main]">
            About Us
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Voxsy started in 2015 with the goal of creating a better space for
            communication and connection among gamers. Today, we’re proud to
            have over 150 million users worldwide.
          </p>
        </div>

        {/* Values */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                Community First
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We believe strong communication builds stronger communities.
                Voxsy is designed to make those connections thrive.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                Security & Privacy
              </h3>
              <p className="text-text-secondary leading-relaxed">
                User security is our top priority. We use advanced encryption
                and modern security technologies to protect your data.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                Constant Innovation
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We continuously improve and develop Voxsy to deliver the best
                possible experience for all our users.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
                <FontAwesomeIcon icon={faGlobeAmericas} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                Diversity & Inclusion
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Voxsy is for everyone. We celebrate and support diversity and
                inclusion across all our communities.
              </p>
            </div>
          </div>
        </div>

{/* Team */}
<div className="text-center mb-20">
  <h2 className="text-4xl font-bold mb-12 gradient-text">Our Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Developer 1 */}
    <div className="card text-center group hover-lift">
      <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
        <FontAwesomeIcon icon={faLaptopCode} />
      </div>
      <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
        Parsa Saadat
      </h3>
      <p className="text-text-secondary leading-relaxed">
      JavaScript programmer, in this project he is Back-end developer. 
        <a href="https://github.com/parsa-saadat" target="_blank" className="text-[--main] ml-1">GitHub</a>
      </p>
    </div>

    {/* Developer 2 */}
    <div className="card text-center group hover-lift">
      <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
        <FontAwesomeIcon icon={faLaptopCode} />
      </div>
      <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
        Sepehr Jam
      </h3>
      <p className="text-text-secondary leading-relaxed">
        React developer, focused on modern React patterns and state management.
        <a href="https://github.com/SepehrJambbb" target="_blank" className="text-[--main] ml-1">GitHub</a>
      </p>
    </div>
  </div>
</div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              Have a question or suggestion? We’re always happy to hear from
              you.
            </p>
            <div className="grid grid-cols-1 gap-8">
              <div className="card text-center group hover-lift">
                <div className="text-4xl m-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h3 className="text-lg font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                  Email
                </h3>
                <p className="text-text-secondary">support@voxsy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
