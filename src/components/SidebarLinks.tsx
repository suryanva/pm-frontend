import { LucideIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLinks = ({
  href,
  icon: Icon,
  label,
}: //   isCollapsed,
SidebarLinkProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <div>
      <Link to={href} className="w-full">
        <div
          className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
            isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
          }justify-start px-8 py-3`}
        >
          {isActive && (
            <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
          )}

          <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {label}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarLinks;
