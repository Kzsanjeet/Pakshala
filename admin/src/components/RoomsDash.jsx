import React, { useContext, useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { RoomReserveContext } from './RoomReserveContext';
import RoomCard from './RoomCard';
import { ToastContainer } from 'react-toastify';

const RoomsDash = () => {
  const { reserveDetails,getReserveDetails } = useContext(RoomReserveContext);
  const [selectedTab, setSelectedTab] = useState(0);

  
  useEffect(()=>{
    getReserveDetails()
  },[])
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const completedReserves = reserveDetails.filter((reserve) => reserve.status === "Completed");
  const pendingReserves = reserveDetails.filter((reserve) => reserve.status === "Pending");

  return (
    <div className='menu-dash-page'>
      <ToastContainer />
      <h1 className='dashboard-title'>Room Reserve Dashboard</h1>
      <div className='tabs-order'>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: {
              backgroundColor: 'rgb(255, 140, 0)'
            }
          }}
        >
          <Tab
            label="New Reserves"
            sx={{
              fontSize: '1.2rem',
              textTransform: 'capitalize',
              marginRight: '1rem',
              color: selectedTab === 0 ? 'rgb(255, 140, 0)' : 'black',
              '&.Mui-selected': {
                color: 'rgb(255, 140, 0)',
              },
            }}
          />
          <Tab
            label="Completed Reserves"
            sx={{
              fontSize: '1.2rem',
              textTransform: 'capitalize',
              color: selectedTab === 1 ? 'rgb(255, 140, 0)' : 'black',
              '&.Mui-selected': {
                color: 'rgb(255, 140, 0)',
              },
            }}
          />
        </Tabs>
      </div>
      <Box hidden={selectedTab !== 0}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {pendingReserves.map((reserve) => (
            <RoomCard key={reserve._id} reserve={reserve} />
          ))}
        </div>
      </Box>
      <Box hidden={selectedTab !== 1}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {completedReserves.map((reserve) => (
            <RoomCard key={reserve._id} reserve={reserve} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default RoomsDash;
