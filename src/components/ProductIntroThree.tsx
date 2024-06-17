import { Progress } from "@/components/MTComponents";

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

const ProductIntroThree = () => {
  return (
    <div className="w-svw md:px-32 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[32em] w-[100%] max-w-[1200px]">
        <div className="flex flex-col gap-12 w-[95%]">
          <ProgressBar value={50} title="Information Architecture" />
          <ProgressBar value={50} title="App Development" />
          <ProgressBar value={50} title="User Interface" />
        </div>
        <div> image</div>
      </div>
    </div>
  );
};

export default ProductIntroThree;
