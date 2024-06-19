import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-svw border sm:py-24 bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 px-3 md:px-44 md:justify-items-center h-[100%] gap-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold">[Name]</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className="flex pt-6 gap-3">
            <Image
              className="hover:cursor-pointer"
              src="/facebook.svg"
              alt="facebook"
              width={45}
              height={45}
            />
            <Image
              className="hover:cursor-pointer"
              src="/twitter.svg"
              alt="twitter"
              width={45}
              height={45}
            />
            <Image
              className="hover:cursor-pointer"
              src="/youtube.svg"
              alt="youtube"
              width={45}
              height={45}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold">Contact Info</h1>
          <p>[building xxx-xxx-xxx street]</p>
          <p>[City Postal code xxx-xxx]</p>
          <p>[email@gmail.com]</p>
          <p>[+88 (0) 101 0000 000]</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold">Support & Downloads</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className="flex">
            <span>[Appstore]</span>
            <span>[Goolge play]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
