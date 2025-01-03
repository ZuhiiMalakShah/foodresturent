import React from "react";
import check from "../assets/check.svg";
import EggDish from "../assets/Egg.svg";
import FoodDish from "../assets/Food Dish.svg";
import Sandwich from "../assets/Sandwich.svg";
import Image from "next/image";

const HAbout = () => {
  const aboutData = [
    {
      title: "We deliver quality food with a focus on taste and freshness.",
      icon: check,
    },
    {
      title: "Providing exceptional service tailored to your needs.",
      icon: check,
    },
    {
      title: "Committed to creating unique and delightful culinary experiences.",
      icon: check,
    },
  ];

  return (
    <div className="container my-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="container my-5 mx-1">
              <p className="primary-color fs-4 Great-Vibes">About Us</p>
              <span className="fs-2 fw-bold text-white">
                <span className="primary-color fs-2 fw-bold">We </span>
                Create the Best Culinary Products
              </span>
              <p className="text-white mt-2">
                Our passion for food drives us to deliver the best dining
                experiences. From exceptional service to dishes crafted with
                the finest ingredients, we strive to bring joy to every meal.
                With a focus on quality, taste, and innovation, we create
                moments worth savoring.
              </p>
              {aboutData.map((item, index) => (
                <div className="d-flex justify-content-start my-3" key={index}>
                  <Image
                    src={item.icon}
                    alt="checkmark"
                    className="img-fluid me-2"
                  />
                  <span>{item.title}</span>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-color rounded-pill text-white px-4 py-2"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 my-5">
            <div className="container">
              <div className="d-flex justify-content-center">
                <Image src={EggDish} alt="Egg Dish" className="img-fluid" />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="container px-1">
                  <Image src={FoodDish} alt="Food Dish" className="img-fluid" />
                </div>
                <div className="container px-1">
                  <Image
                    src={Sandwich}
                    alt="Sandwich Dish"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HAbout;
