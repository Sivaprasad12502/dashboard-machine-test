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
    <div className="px-6 py-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Left large card */}
        <div className="col-span-8">
          <div className="bg-white rounded-xl p-6 shadow-sm h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-400">
                  {/* icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                      stroke="#12B0FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 20a9 9 0 0118 0"
                      stroke="#12B0FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[20px] font-medium text-[#4A4A4A]">
                    Total Employees
                  </div>
                </div>
              </div>
              <div className="text-[18px] font-semibold text-[#4A4A4A]">22</div>
            </div>

            <div className="h-50">
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
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={18}>
                    {data.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                    <LabelList
                      position="top"
                      content={({ x, y, width, fill }) => (
                        <rect
                          x={Number(x) + Number(width) / 2 - 4}
                          y={Number(y) - 8}
                          width={8}
                          height={3}
                          rx={2}
                          fill={fill}
                        />
                      )}
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

            <div className="text-right mt-4 text-sm text-gray-400 cursor-pointer">
              View All
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5v14"
                      stroke="#12B0FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12h14"
                      stroke="#12B0FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Total Actives</div>
                </div>
                <div className="ml-auto text-sm font-semibold text-gray-700">
                  5
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>UI/UX</span>
                  <span className="text-gray-600">5 users</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Flutter</span>
                  <span className="text-gray-600">4 users</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Python</span>
                  <span className="text-gray-600">6 users</span>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">View All</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#12B0FF"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">
                    Today's Attendance
                  </div>
                </div>
                <div className="ml-auto text-sm font-semibold text-gray-700">
                  42
                </div>
              </div>

              <div className="space-y-3 mt-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Present</div>
                  <div className="text-sm font-semibold text-gray-700">32</div>
                </div>
                <div className="w-full bg-[#F3F7FA] h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-[#2FA04A]"
                    style={{ width: "72%" }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Late</div>
                  <div className="text-sm font-semibold text-gray-700">4</div>
                </div>
                <div className="w-full bg-[#F3F7FA] h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-[#F4A100]"
                    style={{ width: "12%" }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Leave</div>
                  <div className="text-sm font-semibold text-gray-700">6</div>
                </div>
                <div className="w-full bg-[#F3F7FA] h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-[#E24D4D]"
                    style={{ width: "16%" }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-400">View All</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-400">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5v14"
                    stroke="#12B0FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold text-[#4A4A4A]">
                  Pending Requests{" "}
                  <span className="text-gray-400 font-normal">8</span>
                </div>
                <div className="text-sm text-[#F4A825] mt-2">
                  You have 21 Pending Approvals & 14 Leave Requests
                </div>
              </div>
              <div className="text-sm text-gray-400">View All</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
