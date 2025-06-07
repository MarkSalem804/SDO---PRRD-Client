import { useState } from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import StorageIcon from "@mui/icons-material/Storage";
import depedLogo from "../assets/deped_logo.png";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const navItems = [
    {
      path: "/admin",
      icon: <DashboardIcon />,
      label: "Dashboard",
    },
    {
      path: "/admin/users",
      icon: <PeopleIcon />,
      label: "Users",
    },
    {
      path: "/admin/data",
      icon: <StorageIcon />,
      label: "Data Management",
    },
  ];

  return (
    <div
      className={`bg-gray-800 text-white h-screen transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <img
              src={depedLogo}
              alt="DepEd Logo"
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="font-poppins font-medium">SDOIC OneLink</span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-300 focus:outline-none flex-shrink-0"
        >
          <ArrowLeftIcon
            className={`transform transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <nav className="mt-8">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                {!isCollapsed && (
                  <span className="font-poppins">{item.label}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const Header = ({ isCollapsed, auth }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setAuth } = useStateContext();

  const handleLogout = () => {
    setAuth(null);
    // Add navigation to login page if needed
  };

  return (
    <header className="w-full h-16 bg-gray-600 shadow flex items-center px-8 justify-between">
      <div className="flex items-center">
        <img
          src={depedLogo}
          alt="DepEd Logo"
          className={`h-10 object-contain mr-4 transition-opacity duration-300 ${
            isCollapsed ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`text-white text-lg font-semibold transition-opacity duration-300 font-poppins ${
            isCollapsed ? "opacity-100" : "opacity-0"
          }`}
        >
          SDOIC OneLink
        </div>
      </div>
      <div className="flex items-center space-x-3 relative">
        <span className="text-white max-w-[200px] truncate font-poppins capitalize">
          {auth?.role === "admin" ? "Administrator" : auth?.role || "Guest"}
        </span>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="focus:outline-none flex items-center"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${
                auth?.email?.split("@")[0] || "Guest"
              }`}
              alt="avatar"
              className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-white transition-all"
            />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowDropdown(false)}
              />

              {/* Dropdown Content */}
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-20">
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://ui-avatars.com/api/?name=${
                        auth?.email?.split("@")[0] || "Guest"
                      }`}
                      alt="avatar"
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate max-w-[200px] font-poppins">
                        {auth?.email || "Guest"}
                      </p>
                      <p className="text-xs text-gray-500 capitalize font-poppins">
                        {auth?.role === "admin"
                          ? "Administrator"
                          : auth?.role || "Guest"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2 font-poppins"
                  >
                    <LogoutIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  auth: PropTypes.shape({
    email: PropTypes.string,
    role: PropTypes.string,
  }),
};

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { auth } = useStateContext();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isCollapsed={isCollapsed} auth={auth} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  const { auth } = useStateContext();

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 font-poppins">
        Welcome, {auth?.email?.split("@")[0] || "Admin"}!
      </h1>
      {/* Add your dashboard content here */}
    </>
  );
};

const AdminDashboard = () => {
  return <DashboardLayout />;
};

export { DashboardLayout, DashboardHome };
export default AdminDashboard;
