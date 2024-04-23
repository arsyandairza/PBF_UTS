import { FunctionComponent } from "react";

const Navbar1: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[220px] [backdrop-filter:blur(4px)] w-[1220px] h-[90px] overflow-hidden text-left text-sm text-white font-poppins">
      <div className="absolute top-[18px] left-[1093px] w-[55px] h-[55px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[55px] h-[55px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dimgray w-[55px] h-[55px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-61xl w-[55px] h-[55px] object-cover"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[33px] left-[965px] font-medium flex items-center w-[114px] h-6">
        Mike Wicaksono
      </div>
    </div>
  );
};

export default Navbar1;
