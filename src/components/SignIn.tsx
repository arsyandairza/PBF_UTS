import { FunctionComponent, useCallback } from "react";

const SignIn: FunctionComponent = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Manage User" to the project
  }, []);

  return (
    <section className="w-[870px] [backdrop-filter:blur(4px)] rounded-xl overflow-hidden flex flex-row items-end justify-center relative [row-gap:20px] max-w-full text-center text-31xl text-white font-poppins mq750:flex-wrap">
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl [background:linear-gradient(255.07deg,_rgba(113,_199,_236,_0.3)_33.46%,_rgba(70,_102,_116,_0.3))]" />
      <img
        className="self-stretch flex-1 relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl max-w-full overflow-hidden max-h-full object-cover min-w-[309px] min-h-[680px] z-[1]"
        loading="lazy"
        alt=""
        src="/frame-27@2x.png"
      />
      <div className="w-[394px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[26px] pb-[76px] pr-[41px] pl-[18px] box-border gap-[122px] min-w-[394px] max-w-full z-[2] mq675:min-w-full mq450:gap-[61px] mq750:flex-1 mq750:pt-5 mq750:pb-[49px] mq750:box-border">
        <div className="w-[311px] flex flex-row items-start justify-end py-0 px-[34px] box-border">
          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit mq450:text-11xl mq750:text-21xl">
            Sign In
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[110px] text-left text-xl mq450:gap-[55px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26.3px]">
            <h3 className="m-0 w-[183px] relative text-inherit font-semibold font-inherit flex items-center mq450:text-base">
              Email/Username
            </h3>
            <input
              className="[border:none] [outline:none] bg-[transparent] self-stretch h-[34px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border font-poppins font-semibold text-sm text-lightgray min-w-[201px]"
              placeholder="Username"
              type="text"
            />
            <h3 className="m-0 w-[183px] relative text-inherit font-semibold font-inherit flex items-center mq450:text-base">
              Password
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
              <div className="relative [border:none] bg-[transparent] self-stretch flex flex-row items-start justify-between box-border min-w-[201px] gap-[20px]">
                <input
                  className="[outline:none] pt-0 px-0 pb-[9px] font-poppins font-semibold text-sm text-lightgray [border:none] w-full h-full [background:transparent] relative z-[3]"
                  placeholder="Password"
                  type="text"
                />
                <img
                  className="w-[7%] h-6 absolute overflow-hidden shrink-0 z-[1] right-[0px] bottom-[0px] [pointer-events:none]"
                  loading="lazy"
                  alt=""
                  src="/clarityeyehidesolid.svg"
                />
                <img
                  className="w-[7%] h-6 absolute overflow-hidden shrink-0 z-[1] right-[0px] bottom-[0px] [pointer-events:none]"
                  loading="lazy"
                  alt=""
                  src="/clarityeyehidesolid.svg"
                />
              </div>
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-lightgray" />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-0 px-[61px] bg-[transparent] w-[312px] flex flex-row items-start justify-end box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div
              className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-md [background:linear-gradient(256.59deg,_#71c7ec_7.87%,_#092230_76.37%)] overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[41px] whitespace-nowrap cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
              onClick={onFrameContainerClick}
            >
              <div className="flex-1 relative text-base font-semibold font-poppins text-white text-center">
                Sign In
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
