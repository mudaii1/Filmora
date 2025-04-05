import { SlScreenSmartphone } from "react-icons/sl";
import SectionHeader from "./SectionHeader";
import { FaTabletAlt } from "react-icons/fa";
import { ImTv } from "react-icons/im";
import { LiaLaptopSolid } from "react-icons/lia";
import { GiConsoleController } from "react-icons/gi";
import { BsHeadsetVr } from "react-icons/bs";
function CompitableDevices() {
  return (
    <div className="pb-35">
      <SectionHeader
        title="We Provide you streaming experience across various devices."
        description="With Filmora, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />
      <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-gray-100/10 p-6 md:p-12.5">
          <div className="flex items-center gap-4">
            <SlScreenSmartphone className="rounded-lg bg-white/10 p-2 text-5xl text-white md:p-4 md:text-7xl" />
            <h3 className="text-xl text-white md:text-2xl">Smartphones</h3>
          </div>
          <p className="mt-8 text-sm text-white opacity-60 md:text-lg">
            Watch your favorite movies and TV shows on your smartphone.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100/10 p-6 md:p-12.5">
          <div className="flex items-center gap-4">
            <FaTabletAlt className="rounded-lg bg-white/10 p-2 text-5xl text-white md:p-4 md:text-7xl" />
            <h3 className="text-xl text-white md:text-2xl">Tablets</h3>
          </div>
          <p className="mt-8 text-sm text-white opacity-60 md:text-lg">
            Watch your favorite movies and TV shows on your tablet.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100/10 p-6 md:p-12.5">
          <div className="flex items-center gap-4">
            <ImTv className="rounded-lg bg-white/10 p-2 text-5xl text-white md:p-4 md:text-7xl" />
            <h3 className="text-xl text-white md:text-2xl">Smart TV</h3>
          </div>
          <p className="mt-8 text-sm text-white opacity-60 md:text-lg">
            Watch your favorite movies and TV shows on your smart TV.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100/10 p-6 md:p-12.5">
          <div className="flex items-center gap-4">
            <LiaLaptopSolid className="rounded-lg bg-white/10 p-2 text-5xl text-white md:p-4 md:text-7xl" />
            <h3 className="text-xl text-white md:text-2xl">Laptops</h3>
          </div>
          <p className="mt-8 text-sm text-white opacity-60 md:text-lg">
            Watch your favorite movies and TV shows on your laptop.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100/10 p-6 md:p-12.5">
          <div className="flex items-center gap-4">
            <GiConsoleController className="rounded-lg bg-white/10 p-2 text-5xl text-white md:p-4 md:text-7xl" />
            <h3 className="text-xl text-white md:text-2xl">Gaming Consoles</h3>
          </div>
          <p className="mt-8 text-sm text-white opacity-60 md:text-lg">
            Watch your favorite movies and TV shows on your gaming console.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100/10 p-6 md:p-12.5">
          <div className="flex items-center gap-4">
            <BsHeadsetVr className="rounded-lg bg-white/10 p-2 text-5xl text-white md:p-4 md:text-7xl" />
            <h3 className="text-xl text-white md:text-2xl">VR Headsets </h3>
          </div>
          <p className="mt-8 text-sm text-white opacity-60 md:text-lg">
            Watch your favorite movies and TV shows on your VR headset.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompitableDevices;
