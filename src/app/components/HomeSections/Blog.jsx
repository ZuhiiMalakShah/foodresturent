import React from "react";
import Burger from "../assets/Burger Img.svg";
import Pizza from "../assets/Pizza Img.svg";
import Shwarma from "../assets/Shwarma Img.svg";
import Thumbsup from "../assets/ThumbsUp.svg";
import ChatDots from "../assets/ChatDots.svg";
import ShareNetwork from "../assets/ShareNetwork.svg";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogData = [
    {
      date: "10 February 2022",
      title: "Delicious Recipes to Make Your Day Brighter",
      link: "/",
      imageSrc: Burger,
    },
    {
      date: "10 February 2022",
      title: "Top 5 Pizzas You Should Try This Year",
      link: "/",
      imageSrc: Pizza,
    },
    {
      date: "10 February 2022",
      title: "Everything You Need to Know About Shawarma",
      link: "/",
      imageSrc: Shwarma,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="primary-color fs-4 Great-Vibes">Food Category</p>
          <span className="fs-2 fw-bold text-white">
            <span className="primary-color fs-2 fw-bold">Latest</span> News & Blog
          </span>
        </div>
      </div>
      <div className="row my-5 d-flex justify-content-center">
        {blogData.map((item, index) => (
          <div className="col-sm-3 my-2" key={index}>
            <div className="border">
              <div className="card-img">
                <Image
                  src={item.imageSrc}
                  alt={`Blog about ${item.title}`}
                  className="img-fluid"
                />
              </div>
              <div className="card-text px-3 py-2">
                <span className="primary-color">{item.date}</span>
                <h6 className="py-2">{item.title}</h6>
                <div className="position-relative">
                  <div>
                    <Link
                      href={item.link}
                      className="text-decoration-none text-start text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="position-absolute top-0 end-0">
                    <Image src={Thumbsup} alt="Like" className="mx-1" />
                    <Image src={ChatDots} alt="Comments" className="mx-1" />
                    <Image src={ShareNetwork} alt="Share" className="mx-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
