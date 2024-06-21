import { Carousel, MTButton } from "@/components/MTComponents";

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

export default function CarouselSection() {
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
