import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";

const ManageUser: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onManageDoorContainerClick = useCallback(() => {
    navigate("/manage-door");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#092230,_#1c6a96)] h-[1024px] overflow-hidden text-center text-base text-black font-poppins">
      <Sidebar
        onDashboardContainerClick={onDashboardClick}
        onManageDoorContainerClick={onManageDoorContainerClick}
      />
      <Navbar1 />
      <div className="absolute top-[131px] left-[250px] rounded-mini [background:linear-gradient(242.61deg,_rgba(113,_199,_236,_0.77)_32.37%,_rgba(64,_113,_134,_0.77))] w-[1160px] h-[835px] overflow-hidden">
        <img
          className="absolute top-[789px] left-[48px] w-[33px] h-[33px] overflow-hidden object-contain"
          alt=""
          src="/evaarrowupfill@2x.png"
        />
        <img
          className="absolute top-[789px] left-[80px] w-[33px] h-[33px] overflow-hidden object-contain"
          alt=""
          src="/evaarrowupfill1@2x.png"
        />
        <div className="absolute top-[110px] left-[0px] bg-white box-border w-[1160px] h-[667px] border-[1px] border-solid border-black" />
        <img
          className="absolute top-[110px] left-[0px] w-[1159px] h-[666px]"
          alt=""
          src="/tableframe.svg"
        />
        <div className="absolute top-[110px] left-[1001px] w-[158px] h-[666px] overflow-hidden text-white">
          <div className="absolute top-[53px] left-[0px] w-[158px] h-[59px] overflow-hidden">
            <div className="absolute top-[11px] left-[43px] rounded-md bg-skyblue-100 w-[71px] h-9 overflow-hidden hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
              <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[71px] h-9">
                Edit
              </div>
            </div>
          </div>
          <div className="absolute top-[113px] left-[0px] w-[158px] h-[59px] overflow-hidden">
            <div className="absolute top-[11px] left-[43px] rounded-md bg-skyblue-100 w-[71px] h-9 overflow-hidden hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
              <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[71px] h-9">
                Edit
              </div>
            </div>
          </div>
          <div className="absolute top-[173px] left-[0px] w-[158px] h-[59px] overflow-hidden">
            <div className="absolute top-[11px] left-[43px] rounded-md bg-skyblue-100 w-[71px] h-9 overflow-hidden hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
              <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[71px] h-9">
                Edit
              </div>
            </div>
          </div>
          <div className="absolute top-[233px] left-[0px] w-[158px] h-[59px] overflow-hidden">
            <div className="absolute top-[11px] left-[43px] rounded-md bg-skyblue-100 w-[71px] h-9 overflow-hidden hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
              <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[71px] h-9">
                Edit
              </div>
            </div>
          </div>
          <div className="absolute top-[293px] left-[0px] w-[158px] h-[59px] overflow-hidden">
            <div className="absolute top-[12px] left-[43px] rounded-md bg-skyblue-100 w-[71px] h-9 overflow-hidden hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
              <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[71px] h-9">
                Edit
              </div>
            </div>
          </div>
          <div className="absolute top-[353px] left-[0px] w-[158px] h-[59px] overflow-hidden">
            <div className="absolute top-[12px] left-[43px] rounded-md bg-skyblue-100 w-[71px] h-9 overflow-hidden hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]">
              <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[71px] h-9">
                Edit
              </div>
            </div>
          </div>
          <div className="absolute top-[413px] left-[0px] w-[158px] h-[59px] overflow-hidden" />
          <div className="absolute top-[473px] left-[0px] w-[158px] h-[59px] overflow-hidden" />
          <div className="absolute top-[533px] left-[0px] w-[158px] h-[59px] overflow-hidden" />
          <div className="absolute top-[593px] left-[0px] w-[158px] h-[59px] overflow-hidden" />
          <div className="absolute top-[1px] left-[0px] font-semibold text-black flex items-center justify-center w-[158px] h-[51px]">
            Action
          </div>
        </div>
        <div className="absolute top-[110px] left-[841px] w-[159px] h-[666px] overflow-hidden">
          <div className="absolute top-[593px] left-[0px] w-[159px] h-[60px] overflow-hidden" />
          <div className="absolute top-[533px] left-[0px] w-[159px] h-[60px] overflow-hidden" />
          <div className="absolute top-[473px] left-[0px] w-[159px] h-[60px] overflow-hidden" />
          <div className="absolute top-[413px] left-[0px] w-[159px] h-[60px] overflow-hidden" />
          <div className="absolute top-[353px] left-[0px] w-[159px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[159px] h-[60px]">
              1
            </div>
          </div>
          <div className="absolute top-[293px] left-[0px] w-[159px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[159px] h-[60px]">
              2
            </div>
          </div>
          <div className="absolute top-[233px] left-[0px] w-[159px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[159px] h-[60px]">
              1
            </div>
          </div>
          <div className="absolute top-[173px] left-[0px] w-[159px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[-2px] font-semibold flex items-center justify-center w-[159px] h-[60px]">
              1
            </div>
          </div>
          <div className="absolute top-[113px] left-[0px] w-[159px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[159px] h-[60px]">
              1
            </div>
          </div>
          <div className="absolute top-[53px] left-[0px] w-[159px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[159px] h-[60px]">
              1
            </div>
          </div>
          <div className="absolute top-[1px] left-[0px] font-semibold flex items-center justify-center w-[159px] h-[51px]">
            Level
          </div>
        </div>
        <div className="absolute top-[110px] left-[601px] w-[239px] h-[666px] overflow-hidden text-left text-sm">
          <div className="absolute top-[600px] left-[0px] w-[238px] h-[59px] overflow-hidden" />
          <div className="absolute top-[533px] left-[0px] w-[238px] h-[59px] overflow-hidden" />
          <div className="absolute top-[473px] left-[0px] w-[238px] h-[59px] overflow-hidden" />
          <div className="absolute top-[413px] left-[0px] w-[238px] h-[59px] overflow-hidden" />
          <div className="absolute top-[353px] left-[0px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[0px] left-[18px] font-medium flex items-center w-[202px] h-[60px]">
              3Ygnw4xYzwue44JKl7Yuix49
            </div>
          </div>
          <div className="absolute top-[293px] left-[0px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[0px] left-[18px] font-medium flex items-center w-[202px] h-[60px]">
              admin1
            </div>
          </div>
          <div className="absolute top-[233px] left-[0px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[18px] font-medium flex items-center w-[202px] h-[60px]">
              3Ygnw4xYzwue44JKl7Yuix49
            </div>
          </div>
          <div className="absolute top-[173px] left-[0px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[18px] font-medium flex items-center w-[202px] h-[60px]">
              3Ygnw4xYzwue44JKl7Yuix49
            </div>
          </div>
          <div className="absolute top-[113px] left-[0px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[19px] font-medium flex items-center w-[202px] h-[60px]">
              3Ygnw4xYzwue44JKl7Yuix49
            </div>
          </div>
          <div className="absolute top-[53px] left-[0px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[19px] font-medium flex items-center w-[202px] h-[60px]">
              3Ygnw4xYzwue44JKl7Yuix49
            </div>
          </div>
          <div className="absolute top-[1px] left-[1px] text-base font-semibold text-center flex items-center justify-center w-[237px] h-[52px]">
            Password
          </div>
        </div>
        <div className="absolute top-[110px] left-[362px] w-[238px] h-[666px] overflow-hidden text-left text-sm">
          <div className="absolute top-[593px] left-[1px] w-[238px] h-[73px] overflow-hidden" />
          <div className="absolute top-[473px] left-[1px] w-[238px] h-[59px] overflow-hidden" />
          <div className="absolute top-[415px] left-[1px] w-[238px] h-[59px] overflow-hidden" />
          <div className="absolute top-[353px] left-[1px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[18px] font-medium flex items-center w-[202px] h-[60px]">
              intanUhuy13
            </div>
          </div>
          <div className="absolute top-[293px] left-[1px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[0px] left-[18px] font-medium flex items-center w-[202px] h-[60px]">
              admin1
            </div>
          </div>
          <div className="absolute top-[233px] left-[1px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[21px] font-medium flex items-center w-[202px] h-[60px]">
              afhdolUhuy19
            </div>
          </div>
          <div className="absolute top-[173px] left-[1px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[21px] font-medium flex items-center w-[202px] h-[60px]">
              bintangUhuy10
            </div>
          </div>
          <div className="absolute top-[113px] left-[1px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[-1px] left-[21px] font-medium flex items-center w-[202px] h-[60px]">
              tristanUhuy21
            </div>
          </div>
          <div className="absolute top-[53px] left-[1px] w-[238px] h-[59px] overflow-hidden">
            <div className="absolute top-[0px] left-[18px] font-medium flex items-center w-[202px] h-[60px]">
              arsyandaUhuy12
            </div>
          </div>
          <div className="absolute top-[1px] left-[1px] text-base font-semibold text-center flex items-center justify-center w-[239px] h-[51px]">
            Username
          </div>
        </div>
        <ul className="m-0 absolute top-[110px] left-[80px] w-[281px] h-[666px] overflow-hidden text-left text-sm">
          <div className="absolute top-[593px] left-[1px] w-[280px] h-[60px] overflow-hidden" />
          <div className="absolute top-[533px] left-[1px] w-[280px] h-[60px] overflow-hidden" />
          <div className="absolute top-[473px] left-[1px] w-[280px] h-[60px] overflow-hidden" />
          <div className="absolute top-[413px] left-[1px] w-[280px] h-[60px] overflow-hidden" />
          <div className="absolute top-[353px] left-[1px] w-[280px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[12px] font-medium flex items-center w-[255px] h-[60px]">
              intan13@gmail.com
            </div>
          </div>
          <div className="absolute top-[293px] left-[1px] w-[280px] h-[60px] overflow-hidden">
            <a
              className="absolute top-[0px] left-[12px] font-medium text-[inherit] flex items-center w-[255px] h-[60px] [text-decoration:none]"
              href="mailto:admin1@gmail.com"
              target="_blank"
            >
              admin1@gmail.com
            </a>
          </div>
          <div className="absolute top-[233px] left-[1px] w-[280px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[12px] font-medium flex items-center w-[255px] h-[60px]">
              afhdhol19@gmail.com
            </div>
          </div>
          <div className="absolute top-[173px] left-[1px] w-[280px] h-[60px] overflow-hidden">
            <a
              className="absolute top-[0px] left-[12px] font-medium text-[inherit] flex items-center w-[255px] h-[60px] [text-decoration:none]"
              href="mailto:bintang.s@gmal.com"
              target="_blank"
            >
              bintang.s@gmal.com
            </a>
          </div>
          <div className="absolute top-[113px] left-[1px] w-[280px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[12px] font-medium flex items-center w-[255px] h-[60px]">
              tristan21@gmail.com
            </div>
          </div>
          <div className="absolute top-[53px] left-[1px] w-[280px] h-[60px] overflow-hidden">
            <div className="absolute top-[0px] left-[12px] font-medium flex items-center w-[255px] h-[60px]">
              arsyanda121@gmail.com
            </div>
          </div>
          <div className="absolute top-[1px] left-[1px] text-base font-semibold text-center flex items-center justify-center w-[280px] h-[51px]">
            Email
          </div>
        </ul>
        <div className="absolute top-[110px] left-[1px] w-[79px] h-[666px] overflow-hidden">
          <div className="absolute top-[1px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[52px]">
            No.
          </div>
          <div className="absolute top-[53px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[60px]">
            1
          </div>
          <div className="absolute top-[114px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[59px]">
            2
          </div>
          <div className="absolute top-[174px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[59px]">
            3
          </div>
          <div className="absolute top-[233px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[59px]">
            4
          </div>
          <div className="absolute top-[294px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[58px]">
            5
          </div>
          <div className="absolute top-[354px] left-[0px] font-semibold flex items-center justify-center w-20 h-[59px]">
            6
          </div>
          <div className="absolute top-[414px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[59px]">
            7
          </div>
          <div className="absolute top-[473px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[60px]">
            8
          </div>
          <div className="absolute top-[533px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[60px]">
            9
          </div>
          <div className="absolute top-[593px] left-[0px] font-semibold flex items-center justify-center w-[79px] h-[60px]">
            10
          </div>
        </div>
        <div className="absolute top-[39px] left-[841px] w-[280px] h-[37px]">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-white w-[280px] h-[37px]" />
          <img
            className="absolute top-[8px] left-[248px] w-5 h-5 overflow-hidden"
            alt=""
            src="/phmagnifyingglass.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
