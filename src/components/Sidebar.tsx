import {
  Briefcase,
  ChevronUp,
  ChevronDown,
  LockIcon,
  Search,
  Settings,
  User,
  Users,
  AlertCircle,
  AlertOctagon,
  ShieldAlert,
  AlertTriangle,
  Layers3,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../appStore.ts";
import { toggleSideBar } from "../../utils/redux/globalSlice";
import { Menu, Home } from "lucide-react";
import { X } from "lucide-react";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.global.isSideBarOpen);

  // Toggle sidebar function that dispatches the Redux action
  const handleSidebarToggle = () => {
    dispatch(toggleSideBar());
  };

  const sidebarClassNames = `fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 ease-in-out z-40 dark:bg-black overflow-y-auto bg-white {isOpen ? "w-64" : "w-0"}`;
  return (
    <>
      <div className={`flex min-h-screen  bg-gray-50 text-gray-900`}>
        {/* Hamburger Icon to open sidebar when it's closed */}
        {!isOpen && (
          <button
            onClick={handleSidebarToggle}
            className="fixed top-3 left-4   p-2 text-gray-700 dark:text-white bg-white dark:bg-black rounded-md shadow-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
        )}

        {isOpen && (
          <div className={sidebarClassNames}>
            <div className="flex h-[100%] w-full flex-col justify-start">
              {/* {TOP LOGO} */}
              <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 py-3 dark:bg-black ">
                <div className="text-lg font-bold text-gray-800 dark:text-white">
                  Project Management
                </div>
                {/* Close Button */}
                <button
                  onClick={handleSidebarToggle}
                  className="text-gray-600 dark:text-gray-200"
                >
                  <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
                </button>
              </div>
              {/* {TEAM} */}
              <div className=" flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                <img
                  src="src/assets/logo.png"
                  alt="Logo"
                  className="w-[40px] h-[40px]"
                />
                <div>
                  <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                    PM TEAM
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                    <p className="text-xs text-gray-500">Private</p>
                  </div>
                </div>
              </div>
              {/* {NAVBAR LINKS} */}
              <nav className="z-10 w-full">
                <SidebarLinks icon={Home} label="Home" href="/" />
                <SidebarLinks
                  icon={Briefcase}
                  label="TimeLine"
                  href="/timeline"
                />
                <SidebarLinks icon={Search} label="Search" href="/search" />
                <SidebarLinks
                  icon={Settings}
                  label="Settings"
                  href="/settings"
                />
                <SidebarLinks icon={User} label="Users" href="/users" />
                <SidebarLinks icon={Users} label="Teams" href="/teams" />
              </nav>

              <button
                className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                onClick={() => setShowProjects((prev) => !prev)}
              >
                <span className="">Projects</span>
                {showProjects ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {/* {Project Lists} */}
              <button
                className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                onClick={() => setShowPriority((prev) => !prev)}
              >
                <span className="">Priority</span>
                {showPriority ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {showPriority && (
                <>
                  <SidebarLinks
                    icon={AlertCircle}
                    label="Urgent"
                    href="/priority/urgent"
                  />
                  <SidebarLinks
                    icon={ShieldAlert}
                    label="High"
                    href="/priority/high"
                  />
                  <SidebarLinks
                    icon={AlertTriangle}
                    label="Medium"
                    href="/priority/medium"
                  />
                  <SidebarLinks
                    icon={AlertOctagon}
                    label="Low"
                    href="/priority/low"
                  />
                  <SidebarLinks
                    icon={Layers3}
                    label="Backlog"
                    href="/priority/backlog"
                  />
                </>
              )}
              {/* {Priority Links} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
