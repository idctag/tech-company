import { Gauge, HandCoins, LucideProps, ShieldPlus } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";

interface ShowcaseCardProps {
  title: string;
  description: string;
  Icon?: React.ComponentType<LucideProps>;
}
function ShowcaseCard({ title, description, Icon }: ShowcaseCardProps) {
  return (
    <Card className="hover:cursor-pointer max-w-64">
      <CardContent className="flex justify-center align-middle">
        {Icon && <Icon size={132} className="m-8" />}
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col pt-3">
        <p className="font-bold">{title}</p>
        <p className="mt-3">{description}</p>
      </CardFooter>
    </Card>
  );
}
const ProductIntro = () => {
  return (
    <div className="h-[52rem]  w-screen">
      <div className="w-[100%] flex justify-center mt-32">
        <h1 className="max-w-[48rem] font-bold flex justify-center lg:text-[4rem] md:text-[2rem] text-center">
          What do we offer
        </h1>
      </div>
      <div className="w-screen flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 gap-20 mt-24 justify-items-center max-w-[82rem]">
          <ShowcaseCard
            title="Affordable"
            description="best bank for you buck"
            Icon={HandCoins}
          />
          <ShowcaseCard
            title="Speed"
            description="Fastest form of service you can find"
            Icon={Gauge}
          />
          <ShowcaseCard
            title="Safety"
            description="Safety of your privacy is our priority"
            Icon={ShieldPlus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
