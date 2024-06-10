import React, { useState } from "react";
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageUser: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLogContainerClick = useCallback(() => {
    navigate("/log-activity");
  }, [navigate]);

  const onMonitoringContainerClick = useCallback(() => {
    navigate("/monitoring");
  }, [navigate]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const users = [
    { no: 1, username: 'arsyandauhuy12', pin: '214785' },
    { no: 2, username: 'tristanUhuy21', pin: '330256' },
    { no: 3, username: 'bintangUhuy10', pin: '123456' },
    { no: 4, username: 'afhdolUhuy19', pin: '654321' },
    { no: 5, username: 'admin1', pin: '234567' },
    { no: 6, username: 'intanUhuy13', pin: '345678' },
    { no: 7, username: 'arsyandauhuy12', pin: '******' },
    { no: 8, username: 'tristanUhuy21', pin: '******' },
    { no: 9, username: 'bintangUhuy10', pin: '******' },
    { no: 10, username: 'afhdolUhuy19', pin: '******' },
    { no: 11, username: 'admin1', pin: '******' },
    { no: 12, username: 'intanUhuy13', pin: '******' },
    { no: 13, username: 'arsyandauhuy12', pin: '******' },
    { no: 14, username: 'tristanUhuy21', pin: '******' },
    { no: 15, username: 'bintangUhuy10', pin: '******' },
    { no: 16, username: 'afhdolUhuy19', pin: '******' },
    { no: 17, username: 'admin1', pin: '******' },
    { no: 18, username: 'intanUhuy13', pin: '******' },
    { no: 19, username: 'arsyandauhuy12', pin: '******' },
    { no: 20, username: 'tristanUhuy21', pin: '******' },
    { no: 21, username: 'bintangUhuy10', pin: '******' },
    { no: 22, username: 'afhdolUhuy19', pin: '******' },
    { no: 23, username: 'admin1', pin: '******' },
    { no: 24, username: 'intanUhuy13', pin: '******' },
  ];

  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div
      className="w-full relative"
      style={{
        background: 'linear-gradient(180deg, #092230, #1c6a96)',
        height: '1024px',
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Poppins, sans-serif'
      }}
    >
      <Sidebar 
      onDashboardContainerClick={onDashboardClick}
      onLogContainerClick={onLogContainerClick}
      onMonitoringCameraContainerClick={onMonitoringContainerClick}
      />
      <Navbar1 />

      {/* Header */}
      <div style={{ position: 'relative', top: '170px', width: '80%', left: '300px', padding: '20px', backgroundColor: '#71C7EC', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '14px', borderTopRightRadius: '14px' }}>
        <h1 style={{ margin: 1 }}>Manage User</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              padding: '5px 30px 5px 10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              position: 'relative',
              outline: 'none',
              marginRight: '10px'
            }}
          />
          <img
            className="absolute top-[50%] right-[150px] transform translate-y-[-50%] w-5 h-5 overflow-hidden"
            alt=""
            src="/phmagnifyingglass.svg"
          />
          <button onClick={() => navigate('/edit-data')} style={{ background: '#00f', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
            Add New
          </button>
        </div>
      </div>
      {/* Table */}
      <div style={{ position: 'relative', top: '170px', width: '80%', left: '300px' }}>
        <CTable bordered borderColor="black" style={{
            backgroundColor: 'white',
            overflow: 'hidden'
          }}>
          <CTableHead style={{ backgroundColor: '#f5f5f5' }}>
            <CTableRow>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>No.</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Username</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Personal PIN</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentUsers.map((user, index) => (
              <CTableRow key={index}>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.no}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.username}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.pin}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>
                  <button onClick={() => navigate(`/edit-data/${user.no}`)} style={{ background: '#00f', color: '#fff', padding: '7px 18px', border: 'none', borderRadius: '5px', marginRight: '5px' }}>
                    Edit
                  </button>
                  <button onClick={() => console.log(`Delete user ${user.no}`)} style={{ background: '#f00', color: '#fff', padding: '7px 18px', border: 'none', borderRadius: '5px' }}>
                    Delete
                  </button>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        {filteredUsers.length > itemsPerPage && (
          <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, index) => (
              <li key={index} style={{ marginRight: '5px' }}>
                <button onClick={() => paginate(index + 1)} style={{ background: '#00f', color: '#fff', padding: '7px 10px', border: 'none', borderRadius: '5px' }}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
