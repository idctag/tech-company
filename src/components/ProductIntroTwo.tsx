import { Button } from "./ui/button";

const ProductIntroTwo = () => {
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
};

export default ProductIntroTwo;
