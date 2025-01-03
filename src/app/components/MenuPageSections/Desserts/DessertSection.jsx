import React from "react";
import Coffee from "../../assets/Coffee-cup.svg";
import MenuItem from "../StarterMenu/MenuItem";
import CupCake from "../../assets/Cup Cake.svg";
import Image from "next/image";

const DessertSection = () => {
  const dMenuList = [
    {
      title: "Fig and Lemon Cake",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "PKR 9,000",
    },
    {
      title: "Creamy Mascarpone Cake",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "PKR 12,000",
    },
    {
      title: "Blueberry Lemon Pastry",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "PKR 4,000",
    },
    {
      title: "Chocolate Croissant",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "PKR 10,000",
    },
  ];
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 me-5 mt-2">
          <Image src={CupCake} className="img-fluid" alt="Cup Cake" />
        </div>
        <div className="col-lg-6 my-2 me-4">
          <Image src={Coffee} className="img-fluid" alt="Coffee Cup" />
          <h2 className="fw-bold">Dessert</h2>
          {dMenuList.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              calories={item.calories}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DessertSection;
