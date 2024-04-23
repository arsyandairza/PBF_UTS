import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onManageUserContainerClick = useCallback(() => {
    navigate("/manage-user");
  }, [navigate]);

  const onManageDoorContainerClick = useCallback(() => {
    navigate("/manage-door");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/manage-user");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/manage-door");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#092230,_#1c6a96)] h-[1024px] overflow-hidden text-left text-sm text-white font-poppins">
      <Navbar1 />
      <Sidebar
        onManageUserContainerClick={onManageUserContainerClick}
        onManageDoorContainerClick={onManageDoorContainerClick}
      />
      <div className="absolute top-[297px] left-[252px] rounded-3xs [background:linear-gradient(255.07deg,_rgba(113,_199,_236,_0.75)_33.46%,_rgba(70,_102,_116,_0.75))] [backdrop-filter:blur(4px)] w-[560px] overflow-hidden flex flex-row flex-wrap items-end justify-start p-[15px] box-border gap-[26px_290px] text-base">
        <img
          className="w-[530px] relative rounded-8xs h-[186px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="w-[140px] relative font-semibold flex items-center h-7 shrink-0 [text-shadow:-3px_3px_4px_#000] mix-blend-normal">
          Manage User
        </div>
        <div
          className="h-[41px] w-[85px] relative rounded-md [background:linear-gradient(256.59deg,_#71c7ec_7.87%,_#092230_76.37%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 cursor-pointer text-center hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[85px] h-[41px]">
            Open
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[296px] left-[848px] rounded-3xs [background:linear-gradient(255.07deg,_rgba(113,_199,_236,_0.75)_33.46%,_rgba(70,_102,_116,_0.75))] [backdrop-filter:blur(4px)] w-[560px] h-[292px] overflow-hidden">
        <div className="absolute top-[233px] left-[22px] text-base font-semibold font-poppins text-white text-left flex items-center w-[225px] h-7 [text-shadow:-3px_3px_4px_#000] mix-blend-normal">
          Manage Smart Door Device
        </div>
        <img
          className="absolute top-[15px] left-[15px] rounded-8xs w-[530px] h-[186px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <div
          className="absolute top-[227px] left-[452px] rounded-md [background:linear-gradient(256.59deg,_#71c7ec_7.87%,_#092230_76.37%)] w-[85px] h-[41px] overflow-hidden cursor-pointer hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          onClick={onFrameContainer2Click}
        >
          <div className="absolute top-[0px] left-[0px] text-base font-semibold font-poppins text-white text-center flex items-center justify-center w-[85px] h-[41px]">
            Open
          </div>
        </div>
      </button>
    </div>
  );
};

export default Dashboard;
