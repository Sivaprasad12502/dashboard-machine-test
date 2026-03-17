import Image from "../../assets/image2.png";
import AddIcon from '../../assets/add-circle.svg?react'
import AddBlue from '../../assets/add-circle-blue.svg?react'
const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg border border-(--border) px-11.25 py-8.75 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className=" flex items-center justify-center">
          <img src={Image} alt="User" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-[32px]  font-bold text-(--text-light)">
            Welcome Back, Mohan
          </h2>
          <p className=" text-[16px]  font-normal text-[#DE8D12]">
            Super admin
          </p>
          <p className=" text-[16px] leading-none font-normal text-[#909090]">
            You have <span className="text-(--primary) font-semibold mx-3 text-[20px] underline">21</span>{" "}
            Pending Approvals &{" "}
            <span className="text-(--primary) font-semibold mx-3 text-[20px] underline">14</span> Leave
            Requests
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-3">
        <button className="h-15 rounded-sm bg-[#94C21A] text-[#FCFCFC] text-[16px] font-medium  flex items-center justify-center gap-1.25 px-2">
          <AddIcon/>
          Add Project
        </button>

        <button className="h-15 rounded-sm bg-[#00A0E3] text-[#FCFCFC] text-[16px] font-medium  flex items-center justify-center gap-1.25 px-2">
          <AddIcon/>
          Add Requests
        </button>

        <button className="col-span-2 h-15 rounded-sm border border-(--border) text-(--text-light) text-[16px] font-medium  flex items-center justify-center gap-1.25 px-2">
          <AddBlue/>
          Add New Employee
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
