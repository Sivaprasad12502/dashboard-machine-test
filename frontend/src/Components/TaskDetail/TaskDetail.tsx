import axios from "axios";
import { useEffect, useState } from "react";
import { Clock, PauseCircle, AlertCircle, Loader } from "lucide-react";
import CircularProgress from "../CircularProgress/CircularProgress";
import Circle from "../Circle/Circle";

type TaskStatus = "Ongoing" | "Pending" | "On Hold" | "Overdue";

type TaskItem = {
  id: number;
  status: TaskStatus;
  percentage: number;
};



const TaskDetail = () => {
  const statusConfig: Record<
    TaskStatus,
    {
      color: string;
      icon: typeof Clock;
    }
  > = {
    Ongoing: {
      color: "#1D8A2E",
      icon: Loader,
    },
    Pending: {
      color: "#F4BF00",
      icon: Clock,
    },
    "On Hold": {
      color: "#2F8AF4",
      icon: PauseCircle,
    },
    Overdue: {
      color: "#E24D4D",
      icon: AlertCircle,
    },
  };
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  useEffect(() => {
    axios.get<TaskItem[]>("http://localhost:5000/api/data/").then((res) => {
      setTasks(res.data);
    });
  }, []);
  if (tasks) {
    console.log(tasks);
  }
  return (
    <div className="px-6 py-6">
      {/* Top card: Today's Tasks Progress */}
      <div className="bg-white rounded-xl p-6 border border-[#EEF6FB]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-400">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6v6l4 2"
                stroke="#12B0FF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-[#333333]">
            Today's Tasks Progress
          </h3>
        </div>

        <div className="border-t border-[#E6F2F9] -mx-6 px-6 pt-6">
          <div className="flex items-center gap-8">
            {tasks?.map((task) => {
              const config = statusConfig[task.status];
              const Icon = config.icon;
              return (
                <div key={task.id} className="flex flex-col items-center gap-3">
                  <CircularProgress
                    size={110}
                    stroke={12}
                    percentage={task.percentage}
                    color={config.color}
                  />

                  <div className="flex items-center gap-2 mt-2 text-sm text-[#6B6B6B]">
                    <div
                      className="w-6 h-6 rounded-md border flex items-center justify-center"
                      style={{ borderColor: config.color, color: config.color }}
                    >
                      <Icon size={14} />
                    </div>

                    <span>{task.status}</span>
                  </div>
                </div>
              );
            })}

            <div className="ml-auto w-56 h-36 rounded-md border border-[#E6F2F9] flex flex-col items-center justify-center text-center">
              <div className="text-xl font-semibold text-[#4A4A4A]">
                3/8 hrs
              </div>
              <div className="text-sm text-[#8A8A8A] mt-2">
                Spent on Overall Tasks this Day
              </div>
              <div className="text-sm text-[#12A0E0] mt-4 cursor-pointer">
                View All
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Two cards */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl p-6 border border-[#EEF6FB] flex items-center justify-between">
          <div className="w-2/3">
            <div className="flex items-center gap-3 mb-4">
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
              <div>
                <div className="text-md font-medium text-[#4A4A4A]">
                  Total Projects
                </div>
                <div className="text-sm text-[#8A8A8A] mt-2">
                  Centralized control over all projects for streamlined
                  management.
                </div>
              </div>
            </div>

            <ul className="text-sm text-[#6B6B6B] space-y-2 mt-2">
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                Completed Projects
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                On-Progress Projects
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                Overdue Projects
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                On-Hold Projects
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                On-Pending Projects
              </li>
            </ul>

            <div className="text-sm text-[#8A8A8A] mt-4">View All</div>
          </div>

          <div className="w-1/3 flex items-center justify-center">
            <div className="relative">
             <Circle maxValue={150}/>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#EEF6FB] flex items-center justify-between">
          <div className="w-2/3">
            <div className="flex items-center gap-3 mb-4">
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
              <div>
                <div className="text-md font-medium text-[#4A4A4A]">
                  Total Tasks
                </div>
                <div className="text-sm text-[#8A8A8A] mt-2">
                  Centralized control over all tasks for streamlined management.
                </div>
              </div>
            </div>

            <ul className="text-sm text-[#6B6B6B] space-y-2 mt-2">
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                Pending Tasks
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                Completed Tasks
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                Overdue Tasks
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" /> In
                Progress
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 border rounded" />{" "}
                Priority Tasks
              </li>
            </ul>

            <div className="text-sm text-[#8A8A8A] mt-4">View All</div>
          </div>

          <div className="w-1/3 flex items-center justify-center">
            <div className="relative">
              <Circle  maxValue={280}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
