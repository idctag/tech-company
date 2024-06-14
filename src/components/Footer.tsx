import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-svw border sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 px-3 md:px-44 md:place-items-center h-[100%] gap-24">
        <div className="flex flex-col gap-5">
          <h1>[Name]</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className="flex gap-8">
            <Facebook className="hover:cursor-pointer" size={50} />
            <Youtube className="hover:cursor-pointer" size={50} />
            <Twitter className="hover:cursor-pointer" size={50} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1>Contact Info</h1>
          <p>[building xxx-xxx-xxx street]</p>
          <p>[City Postal code xxx-xxx]</p>
          <p>[email@gmail.com]</p>
          <p>[+88 (0) 101 0000 000]</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1>Support & Downloads</h1>
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
