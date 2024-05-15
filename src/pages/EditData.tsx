import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const EditData: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#092230,_#1c6a96)] h-[1024px] overflow-hidden text-left text-xl text-black font-poppins">
      <div className="absolute top-[66px] left-[100px] rounded-mini [background:linear-gradient(242.61deg,_rgba(113,_199,_236,_0.77)_32.37%,_rgba(64,_113,_134,_0.77))] w-[1240px] h-[893px] overflow-hidden">
        <div className="absolute top-[110px] left-[0px] bg-white box-border w-[1240px] h-[783px] border-[1px] border-solid border-black" />
        <div className="absolute top-[36px] left-[53px] text-31xl font-semibold text-white flex items-center w-[283px] h-[39px]">
          Edit Data
        </div>
        <input
          className="[border:none] [outline:none] bg-gainsboro absolute top-[302px] left-[88px] rounded-3xs w-[1064px] h-[57px]"
          type="text"
        />
        <input
          className="[border:none] [outline:none] bg-gainsboro absolute top-[485px] left-[88px] rounded-3xs w-[1064px] h-[57px]"
          type="email"
        />
        <input
          className="[border:none] [outline:none] bg-gainsboro absolute top-[668px] left-[88px] rounded-3xs w-[1064px] h-[57px]"
          type="password"
        />
        <div className="absolute top-[253px] left-[88px] font-semibold flex items-center w-[238px] h-[49px]">
          Username
        </div>
        <div className="absolute top-[436px] left-[88px] font-semibold flex items-center w-[238px] h-[49px]">
          Email
        </div>
        <div className="absolute top-[619px] left-[88px] font-semibold flex items-center w-[238px] h-[49px]">
          Personal PIN
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-skyblue-100 absolute top-[787px] left-[1023px] rounded-md w-[129px] h-[73px] overflow-hidden hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
          <div className="absolute top-[0px] left-[0px] text-xl font-semibold font-poppins text-white text-center flex items-center justify-center w-[129px] h-[73px]">
            Update
          </div>
        </button>
        <div
          className="absolute top-[165px] left-[139px] text-[25px] font-semibold flex items-center w-[124px] h-[34px] cursor-pointer"
          onClick={onBackTextClick}
        >
          Back
        </div>
        <img
          className="absolute top-[157px] left-[80px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/ionchevronbackoutline.svg"
        />
      </div>
    </div>
  );
};

export default EditData;
