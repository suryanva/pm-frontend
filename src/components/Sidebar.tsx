import { LockIcon } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames =
    "fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 ease-in-out z-40 dark:bg-black overflow-y-auto bg-white w-64";
  return (
    <>
      <div className="flex min-h-screen w-64 bg-gray-50 text-gray-900">
        <div className={sidebarClassNames}>
          <div className="flex h-[100%] w-full flex-col justify-start">
            {/* {TOP LOGO} */}
            <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 py-3 dark:bg-black ">
              <div className="text-xl font-bold text-gray-800 dark:text-white">
                Project Management
              </div>
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
            {/* {PROJECTS} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
