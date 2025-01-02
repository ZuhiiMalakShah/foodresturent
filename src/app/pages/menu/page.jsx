import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import DessertSection from "@/app/components/MenuPageSections/Desserts/DessertSection";
import DrinksMenu from "@/app/components/MenuPageSections/Drinks/Drinks";
import ExperienceSection from "@/app/components/MenuPageSections/Experience/ExperienceSection";
import MainCourse from "@/app/components/MenuPageSections/MainCourse/MainCourse";
import Partners from "@/app/components/MenuPageSections/Partners/Partners";
import StarterMenu from "@/app/components/MenuPageSections/StarterMenu/StarterMenu";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";

const MenuPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StarterMenu />
      <MainCourse />
      <ExperienceSection />
      <DessertSection />
      <DrinksMenu />
      <Partners />
      <Footer />
    </div>
  );
};

export default MenuPage;
