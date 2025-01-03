import Image from "next/image";
import React from "react";
import Clock from "../assets/Clockwise.svg";

const AboutUsSection = () => {
  return (
    <div className="col-lg-4">
      <span className="fs-5 fw-bold">About Us</span>
      <p className="mt-4">
        Our corporate clients and leisure travelers trust us for reliable, safe, and professional chauffeured car services in major cities around the world.
      </p>
      <div className="container d-flex pe-5">
        <div className="text-center rounded yellowBg" style={{ width: "5rem", height: "5rem" }}>
          <Image src={Clock} alt="Clock Icon" className="img-fluid py-3" />
        </div>
        <div className="px-3">
          <p className="fs-6 lh-1">Opening Hours</p>
          <p className="fs-6 lh-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
          <span className="fs-6 lh-1">Sunday: Closed</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
