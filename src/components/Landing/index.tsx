import Image from "next/image";
import Fuji from "../../../public/landing.jpg";
import Layer from "@/components/Layout/Layer";

const Landing = () => {
  return (
    <div className="w-full h-96 md:h-96 relative bg-black overflow-hidden">
      <Image src={Fuji} alt="fuji" fill className="object-cover" />
      <div className="bg-gradient-to-t from-white/40 to-transparent hidden sm:block absolute w-full h-full"></div>
      <div className="absolute flex justify-center items-center w-full h-full">
        <Layer isMiddle>
          <div>
            <p className="text-white drop-shadow-sm text-3xl font-bold">
              The Most Luxurious
            </p>
            <p className="text-white drop-shadow-sm text-3xl font-bold">
              Hotel In-Town!
            </p>
          </div>
          <hr className="my-2 border-white" />
          <div className="py-2" />
        </Layer>
      </div>
    </div>
  );
};
export default Landing;
