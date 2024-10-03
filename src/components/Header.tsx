import { Search, Settings } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "/home/surya/Courses/WebDev/Clones/jira_clone/pm-frontend/appStore.ts";
import { toggleDarkMode } from "/home/surya/Courses/WebDev/Clones/jira_clone/pm-frontend/utils/redux/globalSlice.ts";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const isDark = useSelector((store: RootState) => store.global.isDarkModeOn);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.global.isSideBarOpen);
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* {Search Bar} */}
      <div className="flex items-center gap-8">
        <div
          className={`relative flex h-min w-[200px] ${
            isOpen ? "ml-0" : "ml-14"
          }`}
        >
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
          />
        </div>
      </div>

      {/* {Icons} */}
      <div className="flex items-center">
        {/* {Dark Mode Toggle} */}
        <div className="flex items-center">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            {isDark ? (
              <Sun className="h-6 w-6 dark:text-white" />
            ) : (
              <Moon className="h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>
        <Link
          to="/settings"
          className="h-min w-min rounded p-2 hover::bg-gray-100"
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Header;
