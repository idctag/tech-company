function Card({ title, fill }: { title: string; fill: string }) {
  return (
    <div className="flex items-start gap-5 my-32 custom-hover rounded-lg p-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 100"
        fill={fill}
      >
        <path d="M 24.085938 33.445313 L 14.417969 24.429688 L 15.78125 22.96875 L 23.914063 30.550781 L 44.296875 6.433594 C 43.011719 4.945313 41.117188 4 39 4 L 11 4 C 7.132813 4 4 7.132813 4 11 L 4 39 C 4 42.867188 7.132813 46 11 46 L 39 46 C 42.867188 46 46 42.867188 46 39 L 46 11 C 46 10.007813 45.789063 9.0625 45.414063 8.203125 Z"></path>
      </svg>
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
        <Card title="Market Analysis" fill="black" />
        <Card title="Financial Advice" fill="green" />
        <Card title="Web Solution" fill="orange" />
      </div>
    </div>
  );
};

export default CheckMarkCard;
