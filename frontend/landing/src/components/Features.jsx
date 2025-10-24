import React from "react";
import {
  faComments,
  faMicrophone,
  faUsers,
  faGaugeHigh,
  faLock,
  faGamepad,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
  return (
    <section className="py-20 px-6 bg-voxsy-black text-left">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[--main]">
            Why Voxsy?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Unique features that make Voxsy the best choice for your community.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="card group hover-lift text-center">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform duration-300">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              A space to connect with your community
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Voxsy servers are organized into channels where you can
              collaborate, share, and talk freely without overwhelming a single
              chat group.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card group hover-lift text-center">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform duration-300">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              Conversations made easy
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Sit in a voice channel when you’re free. Your friends can see
              you're there and instantly join to chat — no calls required.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card group hover-lift text-center">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform duration-300">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              From small groups to full communities
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Whether managing a small group or a large network, Voxsy’s
              moderation tools and customization options help you create your
              own unique space.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faLock} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">
              High Security
            </h4>
            <p className="text-text-secondary text-sm">
              End-to-end encryption
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faGaugeHigh} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">
              High Performance
            </h4>
            <p className="text-text-secondary text-sm">
              Low latency & high quality
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faGamepad} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">
              Gaming Friendly
            </h4>
            <p className="text-text-secondary text-sm">
              The best experience for gamers
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faLayerGroup} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">
              Cross-Platform
            </h4>
            <p className="text-text-secondary text-sm">
              Accessible everywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
