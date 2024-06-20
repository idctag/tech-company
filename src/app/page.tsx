import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Gauge, HandCoins, LucideProps, ShieldPlus } from "lucide-react";
import { Progress, Carousel, MTButton } from "@/components/MTComponents";
import CheckMarkCard from "@/components/CheckMarkCard";

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
const Cards = () => {
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
    <div className="md:px-32 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[32em] w-[100%] max-w-[1100px]">
        <div className="flex flex-col gap-12 w-[90%]">
          <ProgressBar value={50} title="Information Architecture" />
          <ProgressBar value={92} title="App Development" />
          <ProgressBar value={93} title="User Interface" />
          <ProgressBar value={74} title="Total memory usage" />
        </div>
        <img
          src="https://img.freepik.com/premium-vector/seo-with-person-using-smartphone-vector_951778-1707.jpg?w=2000"
          alt="image"
        />
      </div>
    </div>
  );
}

function CarouselPage({
  title,
  description,
  img,
}: {
  title: string;
  description?: string;
  img: string;
}) {
  return (
    <div className="grid grid-cols-3 items-center">
      <img src={img} alt="image 1" className="carousel-image" />
      <div className="flex text-center justify-center align-middle pr-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl">{title}</h1>
          {description ? (
            <p className="text-lg">{description}</p>
          ) : (
            <p className="text-lg">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          )}
          <div className="flex justify-center gap-6">
            <MTButton
              variant="gradient"
              className="text-white hover:shadow-2xl"
            >
              Read more
            </MTButton>
            <MTButton variant="gradient" className="text-white">
              Contanct us
            </MTButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselSection() {
  return (
    <Carousel className="carousel">
      <CarouselPage
        title="Heading one"
        img="https://img.freepik.com/free-vector/hand-drawn-innovative-idea-illustrated_52683-76699.jpg?w=2000&t=st=1718719175~exp=1718719775~hmac=30b377fc26025b2e85003f11bead6e4f059199fde796363f06f5c8231072d136"
      />
      <CarouselPage
        title="Heading two"
        img="https://img.freepik.com/free-vector/hand-drawn-gathering-data-business-concept_23-2149164274.jpg?w=2000&t=st=1718719194~exp=1718719794~hmac=3d2146a7f6c0dbb7c41c1d23e3bb5fab068d61a5878885df20c9e483d579ff40"
      />
      <CarouselPage
        title="Heading three"
        img="https://img.freepik.com/free-vector/hand-drawn-business-strategy_23-2149164272.jpg?t=st=1718806109~exp=1718809709~hmac=466531ab8733ecfc8b0d909fba4c3828041165927a14ff1db7d97d7d5855bce3&w=2000"
      />
    </Carousel>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <CarouselSection />
      <CheckMarkCard />
      <ProgressBarsSection />
      <Cards />
    </div>
  );
}
