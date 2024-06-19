import Image from "next/image";

function Card({ title }: { title: string }) {
  return (
    <div className="flex items-start gap-5 my-32">
      <Image
        src="/check.svg"
        className="w-12"
        alt="check"
        width={50}
        height={50}
      />
      <div className="grid gap-3">
        <h1 className="text-3xl">{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
    </div>
  );
}
const CheckMarkCard = () => {
  return (
    <div className="w-svw flex justify-center md:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 max-w-[1200px]">
        <Card title="Market Analysis" />
        <Card title="Financial Advice" />
        <Card title="Web Solution" />
      </div>
    </div>
  );
};

export default CheckMarkCard;
