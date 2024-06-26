import { Progress } from "@/components/MTComponents";

function ProgressBar({ value, title }: { value?: number; title?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-xl">
        <p>{title}</p>
        <p>{value}%</p>
      </div>
      <Progress value={value} />
    </div>
  );
}

export default function ProgressBarsSection() {
  return (
    <div className="flex py-16 lg:py-0 justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[32em] w-[85%] lg:w-[90%] max-w-[1600px]">
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
