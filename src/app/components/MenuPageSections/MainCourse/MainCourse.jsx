import React from "react";
import MenuItem from "../StarterMenu/MenuItem";
import Coffee from "../../assets/Coffee-cup.svg";
import Burger from "../../assets/Cheese Burger.svg";
import Image from "next/image";

const MainCourse = () => {
  const menuList = [
    {
      title: "Big Breakfast Combo",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "PKR 9,000",
    },
    {
      title: "Cashew Chicken Stir-Fry",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "PKR 12,000",
    },
    {
      title: "Vegetable & Green Salad",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "PKR 4,000",
    },
    {
      title: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "PKR 10,000",
    },
  ];
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 my-2 me-5">
          <Image src={Coffee} className="img-fluid" alt="Coffee Cup" />
          <h2 className="fw-bold">Main Course</h2>
          {menuList.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              calories={item.calories}
              price={item.price}
            />
          ))}
        </div>
        <div className="col-lg-5 mt-2">
          <Image src={Burger} className="img-fluid" alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default MainCourse;
