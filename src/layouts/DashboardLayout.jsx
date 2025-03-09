import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar';

const DashboradLayout = () => {
  const [activeQueue, setActiveQueue] = useState([
    {
      task: 'Adapt slides presentation',
      category: 'Corporate Design',
      task_id: '#853281',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Ongoing',
    },
    {
      task: 'BallBoost Logo',
      category: 'Brand Identity Design',
      task_id: '#33448',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Submitted',
    },
    {
      task: 'SportBoost',
      category: 'Brand Identity Design',
      task_id: '#34696',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Ongoing',
    },
    {
      task: 'Komo Glasses Shooting',
      category: 'Digital Design',
      task_id: '#28435',
      last_updated: '24 Apr, 16:04 PM',
      status: 'Ongoing',
    },
    {
      task: 'NovaTech Website Redesign',
      category: 'Web Design',
      task_id: '#51234',
      status: 'Paused',
      last_updated: '02 Mar, 10:30 AM',
    },
    {
      task: 'TechFlow Landing Page',
      category: 'Web Design',
      task_id: '#98321',
      status: 'Delivered',
      last_updated: '23 Feb, 11:20 AM',
    },
    {
      task: 'CreativeStudio Logo',
      category: 'Graphic Design',
      task_id: '#47203',
      status: 'Delivered',
      last_updated: '20 Feb, 15:45 PM',
    },
    {
      task: 'SmartFit App Prototype',
      category: 'App Design',
      task_id: '#15027',
      status: 'Delivered',
      last_updated: '18 Feb, 09:30 AM',
    },
    {
      task: 'PixelPro App UI/UX',
      category: 'App Design',
      task_id: '#42987',
      status: 'Ongoing',
      last_updated: '01 Mar, 14:45 PM',
    },
    {
      task: 'EliteFit Branding',
      category: 'Brand Identity Design',
      task_id: '#37812',
      status: 'Paused',
      last_updated: '28 Feb, 09:15 AM',
    },
    {
      task: 'CyberSecure Logo',
      category: 'Graphic Design',
      task_id: '#29104',
      status: 'Ongoing',
      last_updated: '27 Feb, 17:00 PM',
    },
    {
      task: 'Vortex Ad Campaign',
      category: 'Digital Marketing',
      task_id: '#17389',
      status: 'Submitted',
      last_updated: '25 Feb, 12:20 PM',
    },
  ]);

  const reciveReqQueues = activeQueue;

  return (
    <>
      <DashboardNavbar />
      <Outlet context={reciveReqQueues} />
      <div className="mt-15"></div>
    </>
  );
};

export default DashboradLayout;
