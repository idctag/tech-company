import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Gauge, HandCoins, LucideProps, ShieldPlus } from "lucide-react";
import { Progress, Carousel } from "@/components/MTComponents";

function Hero() {
  return (
    <div className="h-[64rem] w-[100%] bg-[url('/bg-1.jpg')] bg-center bg-cover flex flex-col text-white items-center justify-center text-center">
      <p className="text-md md:text-3xl lg:text-8xl font-bold">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing.
      </p>
      <p className="px-32 md:text-sm lg:text-2xl py-8">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Button variant="secondary" size="lg">
          Read more
        </Button>
        <Button size="lg">Demo</Button>
      </div>
    </div>
  );
}

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
const Cards = () => {
  return (
    <div className="min-h-[40rem]  w-screen">
      <div className="w-[100%] flex justify-center mt-32">
        <div className="w-screen flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 gap-32 mt-24 justify-items-center max-w-[82rem]">
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
};

function ProgressBar({ value, title }: { value?: number; title?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{value}%</p>
      </div>
      <Progress value={value} />
    </div>
  );
}

function ProgressBarsSection() {
  return (
    <div className="w-svw md:px-32 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[32em] w-[100%] max-w-[1200px]">
        <div className="flex flex-col gap-12 w-[95%]">
          <ProgressBar value={50} title="Information Architecture" />
          <ProgressBar value={50} title="App Development" />
          <ProgressBar value={50} title="User Interface" />
        </div>
        <div>image</div>
      </div>
    </div>
  );
}

function CarouselSection() {
  return (
    <Carousel className="w-svw h-[32em] my-[6em]" loop>
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Cards />
      <ProgressBarsSection />
      <CarouselSection />
    </div>
  );
}
