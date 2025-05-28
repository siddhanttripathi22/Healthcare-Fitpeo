import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboarMainContent/DashboardMainContent';

function App() {
  return (
    <div className="flex h-screen text-gray-800"> 
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6"> 
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
}

export default App;