import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageUser = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const users = [
    { no: 1, email: 'arsyanda121@gmail.com', username: 'arsyandauhuy12', pin: '******' },
    { no: 2, email: 'tristan21@gmail.com', username: 'tristanUhuy21', pin: '******' },
    { no: 3, email: 'bintang.s@gmail.com', username: 'bintangUhuy10', pin: '******' },
    { no: 4, email: 'afhdhol19@gmail.com', username: 'afhdolUhuy19', pin: '******' },
    { no: 5, email: 'admin1@gmail.com', username: 'admin1', pin: '******' },
    { no: 6, email: 'intan13@gmail.com', username: 'intanUhuy13', pin: '******' },
    { no: 1, email: 'arsyanda121@gmail.com', username: 'arsyandauhuy12', pin: '******' },
    { no: 2, email: 'tristan21@gmail.com', username: 'tristanUhuy21', pin: '******' },
    { no: 3, email: 'bintang.s@gmail.com', username: 'bintangUhuy10', pin: '******' },
    { no: 4, email: 'afhdhol19@gmail.com', username: 'afhdolUhuy19', pin: '******' },
    { no: 5, email: 'admin1@gmail.com', username: 'admin1', pin: '******' },
    { no: 6, email: 'intan13@gmail.com', username: 'intanUhuy13', pin: '******' },
    { no: 1, email: 'arsyanda121@gmail.com', username: 'arsyandauhuy12', pin: '******' },
    { no: 2, email: 'tristan21@gmail.com', username: 'tristanUhuy21', pin: '******' },
    { no: 3, email: 'bintang.s@gmail.com', username: 'bintangUhuy10', pin: '******' },
    { no: 4, email: 'afhdhol19@gmail.com', username: 'afhdolUhuy19', pin: '******' },
    { no: 5, email: 'admin1@gmail.com', username: 'admin1', pin: '******' },
    { no: 6, email: 'intan13@gmail.com', username: 'intanUhuy13', pin: '******' },
    { no: 1, email: 'arsyanda121@gmail.com', username: 'arsyandauhuy12', pin: '******' },
    { no: 2, email: 'tristan21@gmail.com', username: 'tristanUhuy21', pin: '******' },
    { no: 3, email: 'bintang.s@gmail.com', username: 'bintangUhuy10', pin: '******' },
    { no: 4, email: 'afhdhol19@gmail.com', username: 'afhdolUhuy19', pin: '******' },
    { no: 5, email: 'admin1@gmail.com', username: 'admin1', pin: '******' },
    { no: 6, email: 'intan13@gmail.com', username: 'intanUhuy13', pin: '******' },
  ];

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      <Sidebar />
      <Navbar1 />

      {/* Header */}
      <div style={{ position: 'relative', top: '170px', width: '80%', left: '300px', padding: '20px', backgroundColor: '#71C7EC', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '14px', borderTopRightRadius: '14px' }}>
        <h1 style={{ margin: 1 }}>Manage User</h1>
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
            outline: 'none'
          }}
        />
        <img
          className="absolute top-[50%] right-[35px] transform translate-y-[-50%] w-5 h-5 overflow-hidden"
          alt=""
          src="/phmagnifyingglass.svg"
        />
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
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Email</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Username</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Personal PIN</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentUsers.map((user, index) => (
              <CTableRow key={index}>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.no}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.email}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.username}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>{user.pin}</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>
                  <button onClick={() => navigate(`/edit-user/${user.no}`)} style={{ background: '#00f', color: '#fff', padding: '7px 18px', border: 'none', borderRadius: '5px' }}>
                    Edit
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
      </div>
    </div>
  );
};

export default ManageUser;