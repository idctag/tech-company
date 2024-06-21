import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Gauge, HandCoins, LucideProps, ShieldPlus } from "lucide-react";

interface ShowcaseCardProps {
  title: string;
  description: string;
  Icon?: React.ComponentType<LucideProps>;
}
function ShowcaseCard({ title, description, Icon }: ShowcaseCardProps) {
  return (
    <Card className="hover:cursor-pointer max-w-64 transition ease-in-out delay-75 custom-hover">
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
export default function Cards() {
  return (
    <div className="w-screen mt-32">
      <div className="w-[100%] flex justify-center mb-32">
        <div className="w-screen flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 md:px-12 gap-20 md:gap-20 lg:gap-40 justify-items-center max-w-[82rem]">
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
    </div>
  );
}
