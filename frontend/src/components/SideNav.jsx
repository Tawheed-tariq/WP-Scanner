import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { RiScan2Line } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideNav = ({ open }) => {
  const TopLinks = [
    {
      id: 1,
      title: "Dashboard",
      img: <MdDashboard color="#226F78" size={`20`} />,
      link: "/dashboard",
    },
    {
      id: 2,
      title: "Scans",
      img: <RiScan2Line color="#226F78" size={`20`} />,
      link: "/scans",
    },
    {
      id: 3,
      title: "New Scan",
      img: <TbReportAnalytics color="#226F78" size={`20`} />,
      link: "/report",
    },
    {
      id: 3,
      title: "Report",
      img: <TbReportAnalytics color="#226F78" size={`20`} />,
      link: "/report",
    },
  ];
  const bottomLinks = [
    {
      id: 1,
      title: "Profile",
      img: <TbReportAnalytics color="#226F78" size={`20`} />,
      link: "/profile",
    },
    {
      id: 2,
      title: "Setting",
      img: <TbReportAnalytics color="#226F78" size={`20`} />,
      link: "/setting",
    },
  ];
  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname === link || location.pathname.startsWith(link);
  };
  return (
    <div
      className={`w-60 fixed h-full ${
        open ? "" : "translate-x-[-260px]"
      } transition-all hidden md:flex items-center justify-between flex-col shadow-lg shadow-black/5 border-gray-200 border-r  bg-white`}
    >
      <div className={`flex flex-col gap-[20px] mt-20 pb-10 w-full`}>
        {TopLinks.map((ele) => (
          <Link to={ele.link} key={ele.id}>
            <div
              className={`flex gap-[10px] py-3 px-[20px] ${
                isActiveLink(ele.link)
                  ? "bg-newprimary border-r-2 border-blue-500 text-accent"
                  : ""
              } items-center`}
            >
              {ele.img}
              <p className={`text-sm`}>{ele.title}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={`flex flex-col gap-[20px] py-10 w-full`}>
        {bottomLinks.map((ele) => (
          <Link to={ele.link} key={ele.id}>
            <div
              className={`flex gap-[10px] py-3 px-[20px] ${
                isActiveLink(ele.link)
                  ? "bg-newprimary border-r-2 border-blue-500 text-accent"
                  : ""
              } items-center`}
            >
              {ele.img}
              <p className={`text-sm`}>{ele.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SideNav;