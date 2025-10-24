import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <section className="py-20 px-6 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Are you ready for Voxsy?
        </h2>
        <Link
          to="/download"
          className="bg-[--main] hover:bg-[--main-dark] text-white rounded-full py-4 px-8 text-lg font-medium inline-flex items-center justify-center mx-auto transition-all duration-300"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download
        </Link>
      </div>
    </section>
  );
};

export default Download;
