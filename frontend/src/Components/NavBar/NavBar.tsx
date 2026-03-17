import DashboardIcon from "../../assets/dashboard-square-02-stroke-rounded.svg?react";
import SearchIcon from "../../assets/search.svg?react";
import NotificationIcon from "../../assets/notification.svg?react";
import Image from "../../assets/image.png";

const NavBar = () => {
  return (
    <div className="h-20.5 border-b-2 border-(--border) bg-white px-8 flex items-center justify-between shadow-sm ">
      <div className="flex items-center gap-21.5">
        <div className="flex items-center gap-2.5">
          <DashboardIcon />
          <span className="text-[16px] font-normal text-(--text-light) tracking-[8%]">
            Dashboard
          </span>
        </div>

        <div className="mx-12 max-w-md">
          <div className=" h-8.5 rounded-md border-2 border-[#D0D0D0] bg-white pl-2.5 px-0.5 flex items-center gap-2.5">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search here"
              className="flex-1 bg-transparent text-sm text-[#333333] placeholder-[#888888] outline-none font-normal"
            />
            <button className="bg-[#EAECEC] rounded-md pl-2.25 pr-1.75">
              <span className="font-medium tracking-[8%] leading-4 text-[12px]">
                Search
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8.25">
        <div className="relative">
          <img src={Image} alt="image" />
          <span className="bg-green-400 w-2 h-2 rounded-full absolute bottom-0 right-0"></span>
        </div>
        <div>
          <NotificationIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
