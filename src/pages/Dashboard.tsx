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
    <div className="w-full relative [background:linear-gradient(180deg,#092230,#1c6a96)] h-[1024px] overflow-hidden text-left text-sm text-white font-poppins">
      <Navbar1 />
      <Sidebar
        onManageUserContainerClick={onManageUserContainerClick}
        onManageDoorContainerClick={onManageDoorContainerClick}
      />
    </div>
  );
};

export default Dashboard;