import { SimpleCard } from "@/components/SimpleCard";

import React from "react";

function HeroCards() {
  return (
    <div className="w-[100%] flex justify-center mt-[-85px]">
      <div className="w-[85%] rounded-3xl grid grid-cols-1 lg:grid-cols-3 place-items-center relative bg-white shadow-2xl">
        <SimpleCard
          title="Tilte 1"
          description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          buttonText="Button 1"
        />
        <SimpleCard
          title="Tilte 2"
          description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          buttonText="Button 2"
        />
        <SimpleCard
          title="Tilte 3"
          description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          buttonText="Button 3"
        />
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="w-[100%] lg:max-h-[95svh]">
      <div className="w-svw h-[50svh] overflow-hidden">
        <img src="/hero.png" className="w-full h-full object-cover" />
      </div>
      <HeroCards />
    </div>
  );
};

export default Hero;
