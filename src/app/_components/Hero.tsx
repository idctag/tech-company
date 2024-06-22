import { SimpleCard } from "@/components/SimpleCard";
import Image from "next/image";

import React from "react";

function HeroCards() {
  return (
    <div className="w-[100%] flex justify-center ">
      <div className="w-[85%] rounded-3xl grid grid-cols-1 lg:grid-cols-3 place-items-center relative mt-[-80px] bg-white shadow-2xl">
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
    <div className="w-max">
      <Image src="/hero.png" alt="Image" width={1600} height={1080} />
      <HeroCards />
    </div>
  );
};

export default Hero;
