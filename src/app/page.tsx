import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Gauge, HandCoins, LucideProps, ShieldPlus } from "lucide-react";
import { Progress, Carousel, IconButton } from "@/components/MTComponents";
import CheckMarkCard from "@/components/CheckMarkCard";

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
    <div className="min-h-[30rem] w-screen">
      <div className="w-[100%] flex justify-center mb-32 md:mb-32">
        <div className="w-screen flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 md:px-12 gap-20 md:gap-20 lg:gap-40 mt-24 justify-items-center max-w-[82rem]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[32em] w-[100%] max-w-[1100px]">
        <div className="flex flex-col gap-12 w-[90%]">
          <ProgressBar value={50} title="Information Architecture" />
          <ProgressBar value={92} title="App Development" />
          <ProgressBar value={93} title="User Interface" />
          <ProgressBar value={74} title="Total memory usage" />
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/seo-with-person-using-smartphone-vector_951778-1707.jpg?w=2000"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

function CarouselSection() {
  return (
    <Carousel className="carousel w-svw max-h-[70em] text-black">
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-innovative-idea-illustrated_52683-76699.jpg?w=2000&t=st=1718719175~exp=1718719775~hmac=30b377fc26025b2e85003f11bead6e4f059199fde796363f06f5c8231072d136"
        alt="image 1"
        className="carousel-image"
      />
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-gathering-data-business-concept_23-2149164274.jpg?w=2000&t=st=1718719194~exp=1718719794~hmac=3d2146a7f6c0dbb7c41c1d23e3bb5fab068d61a5878885df20c9e483d579ff40"
        alt="image 2"
        className="carousel-image"
      />
      <img
        src="https://img.freepik.com/free-vector/programmer-working-with-css_52683-24172.jpg?w=2000&t=st=1718719210~exp=1718719810~hmac=3d21ee61dba6317e7e5ccede87e2846190a22e9c327082bbd25ff9686212059d"
        alt="image 3"
        className="carousel-image"
      />
    </Carousel>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <CarouselSection />
      <Cards />
      <ProgressBarsSection />
      <CheckMarkCard />
    </div>
  );
}
