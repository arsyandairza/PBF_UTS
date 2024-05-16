import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";

const ManageDoor: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onManageUserContainerClick = useCallback(() => {
    navigate("/manage-user");
  }, [navigate]);

  return (
    <div
      className="w-full relative [background:linear-gradient(180deg,#092230,#1c6a96)] h-[1024px] overflow-hidden cursor-pointer text-center text-base text-white font-poppins">
      <Sidebar 
      onManageUserContainerClick={onManageUserContainerClick}
      onDashboardContainerClick={onDashboardClick}/>
      <Navbar1 />
      <div className="absolute top-[277px] left-[410px] rounded-2xl [background:linear-gradient(25.18deg,_rgba(113,_199,_236,_0.75)_16.96%,_rgba(70,_102,_116,_0.75)_45.33%)] w-80 h-[470px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-80 h-[370px] overflow-hidden object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div
          className="absolute top-[403px] left-[203px] rounded-md [background:linear-gradient(256.59deg,#71c7ec_7.87%,#092230_76.37%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[85px] h-[41px] overflow-hidden cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
        >
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[85px] h-[41px]">
            Edit
          </div>
        </div>
        <div className="absolute top-[391px] left-[24px] text-sm font-semibold flex items-center justify-center w-[133px] h-[23px]">
          Main Smart Door
        </div>
      </div>
      <div className="absolute top-[277px] left-[930px] rounded-2xl [background:linear-gradient(25.18deg,_rgba(113,_199,_236,_0.75)_16.96%,_rgba(70,_102,_116,_0.75)_45.33%)] w-80 h-[470px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-80 h-[370px] overflow-hidden">
          <div className="absolute top-[1px] left-[0px] rounded-2xl bg-lightgray w-80 h-[370px]" />
          <img
            className="absolute top-[0px] left-[0px] w-80 h-[370px] object-cover"
            alt=""
            src="/image@2x.png"
          />
        </div>
        <div
          className="absolute top-[403px] left-[202px] rounded-md [background:linear-gradient(256.59deg,#71c7ec_7.87%,#092230_76.37%)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[85px] h-[41px] overflow-hidden cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
          
        >
          <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[85px] h-[41px]">
            Edit
          </div>
        </div>
        <div className="absolute top-[391px] left-[10px] text-sm font-semibold flex items-center justify-center w-[166px] h-[23px]">
          Bedroom Smart Door
        </div>
      </div>
    </div>
  );
};

export default ManageDoor;