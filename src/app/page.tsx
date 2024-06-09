import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 h-[72rem] items-center bg-[url('/bg-2.jpg')] bg-center bg-cover text-white">
      <div className=" h-full flex flex-col align-middle justify-center bg-gradient-custom px-8 ">
        <p className="font-bold text-2xl md:text-4xl lg:text-6xl">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p className="pt-16 md:text-sm lg:text-xl">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla.
        </p>
      </div>
      <div className="h-full flex flex-col align-middle justify-center items-center">
        <Button variant="secondary">Read more</Button>
      </div>
    </div>
  );
}
