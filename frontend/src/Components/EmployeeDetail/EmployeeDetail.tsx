import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  LabelList,
} from "recharts";
import PersonsIcon from "../../assets/persons.svg?react";
import AcitvityIcon from "../../assets/activity.svg?react";
import AttendanceIcon from "../../assets/attendance.svg?react";
import LockIcon from "../../assets/lock.svg?react";

const data = [
  { role: "UI/UX", value: 4, color: "#12B000" },
  { role: "Development", value: 8, color: "#001E9E" },
  { role: "Graphic Designer", value: 3, color: "#B10073" },
  { role: "Marketing", value: 3, color: "#1D9ED1" },
  { role: "Intern", value: 7, color: "#144F2E" },
  { role: "Tele caller", value: 7, color: "#BBA200" },
  { role: "HR", value: 3, color: "#C400FF" },
  { role: "Super admin", value: 4, color: "#F4A100" },
  { role: "Admin", value: 5, color: "#2ED9C3" },
];

const EmployeeDetail = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4">
       
        <div className="col-span-5">
          <div className="bg-white rounded-xl flex flex-col justify-between  shadow-sm h-full">
            <div className="flex items-center px-7 pt-10 pb-7.5 border-b border-[#43C8FF] ">
              <div className="flex flex-col  gap-3 ">
                <div className="w-15 h-15 rounded-full bg-[#E9F8FF] flex  items-center justify-center p-1">
                  
                  <PersonsIcon />
                </div>
                <div className="flex items-center gap-7.5">
                  <div className="text-[24px] font-medium text-(--text-light)">
                    Total Employees
                  </div>
                  <div className="text-[24px] font-medium text-(--text-light)">
                    22
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 ">
              <div className="h-62.5">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E5E7EB"
                    />

                    <XAxis dataKey="role" hide />
                    <YAxis
                      width={15}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#909090", fontSize: 12 }}
                    />
                    <Tooltip />
                    <Bar dataKey="value" radius={[2.5, 2.5, 0, 0]} barSize={18}>
                      {data.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                      <LabelList
                        position="top"
                        content={({ x, y, width, fill }) => {
                          const rectWidth = 14;

                          return (
                            <rect
                              x={Number(x) + Number(width) / 2 - rectWidth / 2}
                              y={Number(y) - 8}
                              width={rectWidth}
                              height={5}
                              rx={2}
                              fill={fill}
                            />
                          );
                        }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 text-sm text-gray-600">
                {data.map((item) => (
                  <div key={item.role} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-sm"
                      style={{ background: item.color }}
                    ></span>
                    <span className="truncate">{item.role}</span>
                  </div>
                ))}
              </div>

              <div className="text-right mt-4 text-lg text-[#909090] hover:text-(--primary) cursor-pointer">
                View All
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-7 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl  shadow-sm">
              <div className="flex items-center px-9 pt-10 pb-7.5 border-b border-[#43C8FF] ">
                <div className="flex flex-col  gap-3 ">
                  <div className="w-15 h-15 rounded-full bg-[#E9F8FF] flex  items-center justify-center p-1">
                    <AcitvityIcon />
                  </div>
                  <div className="flex items-center gap-7.5">
                    <div className="text-[24px] font-medium text-(--text-light) text-nowrap">
                      Total Actives
                    </div>
                    <div className="text-[24px] font-medium text-(--text-light)">
                      5
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400 p-10 flex flex-col gap-4">
                <div className="flex justify-around font-normal text-[18px] ">
                  <span>UI/UX</span>
                  <span>5 users</span>
                </div>
                <div className="flex justify-around font-normal text-[18px]">
                  <span>Flutter</span>
                  <span>4 users</span>
                </div>
                <div className="flex justify-around font-normal text-[18px]">
                  <span>Python</span>
                  <span>6 users</span>
                </div>
              </div>
              <div className="p-10 text-[18px] font-medium text-[#909090] hover:text-(--primary) cursor-pointer">View All</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
              <div className="flex items-center px-5 pt-10 pb-7.5 border-b border-[#43C8FF] ">
                <div className="flex flex-col  gap-3 ">
                  <div className="w-15 h-15 rounded-full bg-[#E9F8FF] flex  items-center justify-center p-1">
                    <AttendanceIcon />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-[24px] font-medium text-(--text-light) text-nowrap">
                      Today's Attendance
                    </div>
                    <div className="text-[24px] font-medium text-(--text-light)">
                      42
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-2 p-10">
                <div className="flex items-center gap-4 text-[18px] text-[#909090]">
                  <div>Present</div>
                  <div>32</div>
                  <div className="w-full bg-[#F3F7FA] h-2 rounded-full">
                    <div
                      className="h-2 rounded-full bg-[#259032]"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 text-[18px] text-[#909090]">
                  <div>Late</div>
                  <div>4</div>
                  <div className="w-full bg-[#F3F7FA] h-2 rounded-full">
                    <div
                      className="h-2 rounded-full bg-[#EE9416]"
                      style={{ width: "12%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 text-[18px] text-[#909090]">
                  <div>Leave</div>
                  <div>6</div>
                  <div className="w-full bg-[#F3F7FA] h-2 rounded-full">
                    <div
                      className="h-2 rounded-full bg-[#ED1D1D]"
                      style={{ width: "16%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="p-10 text-[18px] font-medium text-[#909090] hover:text-(--primary) cursor-pointer">View All</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-sm h-full flex justify-between ">
            <div className="flex flex-col items-start gap-3">
              <div className="w-15 h-15 rounded-full bg-[#E9F8FF] flex  items-center justify-center p-1">
                <LockIcon />
              </div>
              <div className="flex-1">
                <div className="text-[24px] font-medium text-[#4D4D4D]">
                  Pending Requests{" "}
                  <span>8</span>
                </div>
                <div className="text-[16px] text-[#E68A0A] mt-2">
                  You have 21 Pending Approvals & 14 Leave Requests
                </div>
              </div>
            </div>
              <div className="text-[18px] font-medium text-[#909090] hover:text-(--primary) cursor-pointer self-end">View All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
