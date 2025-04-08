import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <aside className="w-64 bg-blue-800 text-white p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="flex flex-col space-y-2">
          <Link to="overview" className="hover:bg-blue-700 p-2 rounded">Overview</Link>
          <Link to="profile" className="hover:bg-blue-700 p-2 rounded">Profile</Link>
          <Link to="settings" className="hover:bg-blue-700 p-2 rounded">Settings</Link>
        </nav>
      </aside>


      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
