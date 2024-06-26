"use client";
import { Typography } from "@material-tailwind/react";

type BenefitCardType = {
  title: string;
  description: string;
  icon: string;
};

const BenefitCard = ({ title, description, icon }: BenefitCardType) => {
  return (
    <div className="grid place-items-center gap-3 max-w-[350px] text-center custom-hover rounded-2xl p-12">
      <img src={icon} className="h-28 mb-12" />
      <Typography variant="h2">{title}</Typography>
      <Typography variant="lead">{description}</Typography>
    </div>
  );
};
export const Benefits = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1600px] place-items-center mx-auto">
      <BenefitCard
        title="Benefit 1"
        description="Lorem ipsum dolor sit amet, qui minim labore"
        icon="/code.svg"
      />
      <BenefitCard
        title="Benefit 2"
        description="Lorem ipsum dolor sit amet, qui minim labore"
        icon="/dollar.svg"
      />
      <BenefitCard
        title="Benefit 3"
        description="Lorem ipsum dolor sit amet, qui minim labore"
        icon="/speed.svg"
      />
    </div>
  );
};
