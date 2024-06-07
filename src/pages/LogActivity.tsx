import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LogActivity = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onManageUserContainerClick = useCallback(() => {
    navigate("/manage-user");
  }, [navigate]);

  const onMonitoringContainerClick = useCallback(() => {
    navigate("/monitoring");
  }, [navigate]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const activities = [
    {
      no: 1,
      date: "2023-06-07",
      time: "09:00 AM",
      user: "user1",
      activity: "Logged In",
      photo: "path/to/photo1.jpg", // Add photo path
    },
    {
      no: 2,
      date: "2023-06-07",
      time: "09:30 AM",
      user: "user2",
      activity: "Viewed Dashboard",
      photo: "path/to/photo2.jpg", // Add photo path
    },
    // Add more activities as needed
  ];

  const filteredActivities = activities.filter(
    (activity) =>
      activity.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastActivity = currentPage * itemsPerPage;
  const indexOfFirstActivity = indexOfLastActivity - itemsPerPage;
  const currentActivities = filteredActivities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div
      className="w-full relative"
      style={{
        background: "linear-gradient(180deg, #092230, #1c6a96)",
        height: "1024px",
        overflow: "hidden",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Sidebar
        onManageUserContainerClick={onManageUserContainerClick}
        onDashboardContainerClick={onDashboardClick}
        onMonitoringCameraContainerClick={onMonitoringContainerClick}
      />
      <Navbar1 />
      {/* Header */}
      <div
        style={{
          position: "relative",
          top: "170px",
          width: "80%",
          left: "300px",
          padding: "20px",
          backgroundColor: "#71C7EC",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: "14px",
          borderTopRightRadius: "14px",
        }}
      >
        <h1 style={{ margin: 1 }}>Log Activity</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "5px 30px 5px 10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            position: "relative",
            outline: "none",
          }}
        />
        <img
          className="absolute top-[50%] right-[35px] transform translate-y-[-50%] w-5 h-5 overflow-hidden"
          alt=""
          src="/phmagnifyingglass.svg"
        />
      </div>
      {/* Table */}
      <div
        style={{
          position: "relative",
          top: "170px",
          width: "80%",
          left: "300px",
        }}
      >
        <CTable
          bordered
          borderColor="black"
          style={{
            backgroundColor: "white",
            overflow: "hidden",
          }}
        >
          <CTableHead style={{ backgroundColor: "#f5f5f5" }}>
            <CTableRow>
              <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>
                No.
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>
                Date
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>
                Time
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>
                User
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>
                Activity
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>
                Photo
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentActivities.map((activity, index) => (
              <CTableRow key={index}>
                <CTableDataCell style={{ textAlign: "center" }}>
                  {activity.no}
                </CTableDataCell>
                <CTableDataCell style={{ textAlign: "center" }}>
                  {activity.date}
                </CTableDataCell>
                <CTableDataCell style={{ textAlign: "center" }}>
                  {activity.time}
                </CTableDataCell>
                <CTableDataCell style={{ textAlign: "center" }}>
                  {activity.user}
                </CTableDataCell>
                <CTableDataCell style={{ textAlign: "center" }}>
                  {activity.activity}
                </CTableDataCell>
                <CTableDataCell style={{ textAlign: "center" }}>
                  <img
                    src={activity.photo}
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        {filteredActivities.length > itemsPerPage && (
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {Array.from(
              { length: Math.ceil(filteredActivities.length / itemsPerPage) },
              (_, index) => (
                <li key={index} style={{ marginRight: "5px" }}>
                  <button
                    onClick={() => paginate(index + 1)}
                    style={{
                      background: "#00f",
                      color: "#fff",
                      padding: "7px 10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LogActivity;
