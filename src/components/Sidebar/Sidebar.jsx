import React from 'react';
import {
  FiHome,
  FiClock,
  FiCalendar,
  FiFileText,
  FiBarChart2,
  FiMessageSquare,
  FiSettings,
  FiActivity,
  FiHelpCircle
} from 'react-icons/fi';

const Icons = {
  LayoutDashboard: FiHome,
  History: FiClock,
  Calendar: FiCalendar,
  Clock: FiFileText,
  BarChart3: FiBarChart2,
  TestTube: FiActivity,
  MessageCircle: FiMessageSquare,
  HelpCircle: FiHelpCircle,
  Settings: FiSettings,
};

const General = [
  { name: "Dashboard", icon: "LayoutDashboard", active: true, path: "#" },
  { name: "History", icon: "History", active: false, path: "#" },
  { name: "Calendar", icon: "Calendar", active: false, path: "#" },
  { name: "Appointments", icon: "Clock", active: false, path: "#" },
  { name: "Statistics", icon: "BarChart3", active: false, path: "#" },
];

const Tools = [
  { name: "Chat", icon: "MessageCircle", active: false, path: "#" },
  { name: "Support", icon: "HelpCircle", active: false, path: "#" },
];

const Setting = [
  { name: "Settings", icon: "Settings", active: false, path: "#" },
];

const Sidebar = () => {
  const NavItem = ({ item }) => {
    const IconComponent = Icons[item.icon] || FiHome;
    return (
      <div className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${item.active ? 'bg-blue-100 font-semibold' : ''}`}>
        <IconComponent className="text-xl" />
        <span>{item.name}</span>
      </div>
    );
  };

  return (
    <div className="w-64 h-screen p-6 bg-white shadow-md">
      <div className="mb-8 text-2xl font-bold">
      <span className="text-cyan-400">Health</span>
      <span className="text-indigo-950">care.</span>
       </div>
       <div className="mb-4 text-sm font-medium text-gray-500 uppercase">General</div>
      <div className="space-y-2 mb-6">
        {General.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>

      <div className="mb-4 text-sm font-medium text-gray-500 uppercase">Tools</div>
      <div className="space-y-2 mb-6">
        {Tools.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>

      <div className="mt-auto border-t pt-4 text-sm font-medium text-gray-500 uppercase">Settings</div>
      <div className="space-y-2 mt-2">
        {Setting.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
