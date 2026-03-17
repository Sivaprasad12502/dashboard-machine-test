import axios from "axios";
import { useEffect, useState } from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import Circle from "../Circle/Circle";
import TaskIcon from "../../assets/task.svg?react";
import OngoingIcon from "../../assets/ongoing.svg?react";
import OnholdIcon from "../../assets/onhold.svg?react";
import PeindingIcon from "../../assets/pending.svg?react";
import overDueIcon from "../../assets/overdue.svg?react";
import TassksIcon from "../../assets/Tassks.svg?react";

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
      icon: typeof OngoingIcon;
    }
  > = {
    Ongoing: {
      color: "#1D8A2E",
      icon: OngoingIcon,
    },
    Pending: {
      color: "#F4BF00",
      icon: PeindingIcon,
    },
    "On Hold": {
      color: "#2F8AF4",
      icon: OnholdIcon,
    },
    Overdue: {
      color: "#E24D4D",
      icon: overDueIcon,
    },
  };
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  useEffect(() => {
    axios.get<TaskItem[]>("http://localhost:5000/api/data/").then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <div>
      {/* Top card: Today's Tasks Progress */}
      <div className="bg-white rounded-xl  border border-[#EEF6FB]">
        <div className="flex items-center px-9 pt-10 pb-7.5 border-b border-[#43C8FF] ">
          <div className="flex flex-col  gap-3 ">
            <div className="w-15 h-15 rounded-full bg-[#E9F8FF] flex  items-center justify-center p-1">
              <TaskIcon />
            </div>
            <div className="flex items-center gap-7.5">
              <div className="text-[24px] font-medium text-(--text-light) text-nowrap">
                Today’s Tasks Progress
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E6F2F9] p-10">
          <div className="flex items-center gap-10">
            {tasks?.map((task) => {
              const config = statusConfig[task.status];
              const Icon = config.icon;
              return (
                <div key={task.id} className="flex flex-col items-center gap-4">
                  <CircularProgress
                    size={150}
                    stroke={12}
                    percentage={task.percentage}
                    color={config.color}
                  />

                  <div className="flex items-center gap-2 mt-2 text-sm text-[#6B6B6B]">
                    <div
                      className="w-7 h-8 rounded-md border flex items-center justify-center"
                      style={{ borderColor: config.color, color: config.color }}
                    >
                      <Icon />
                    </div>

                    <span className="text-[20px] text-[#909090]">
                      {task.status}
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="w-62.5 h-90 p-13 rounded-md border border-[#43C8FF] bg-[#F9FDFF] flex flex-col items-center  text-center">
              <div className="flex flex-col justify-center h-full">
                <div className="text-[24px] font-medium text-[#909090]">
                  3/8 hrs
                </div>
                <div className="text-[16px] font-medium text-[#909090] mt-2">
                  Spent on Overall Tasks this Day
                </div>
              </div>
              <div className="text-[18px] text-[#909090] hover:text-(--primary)   cursor-pointer">
                View All
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3.75 mt-3.75  ">
        <div className="bg-white rounded-xl  border border-[#EEF6FB] flex flex-col  ">
          <div className=" px-9 pt-10 pb-7.5 border-b border-[#43C8FF] ">
            <div className="flex flex-col  gap-3 ">
              <div className="w-15 h-15 rounded-full bg-[#E9F8FF] flex  items-center justify-center p-1">
                <TassksIcon />
              </div>
              <div className="flex items-center gap-7.5">
                <div className="text-[24px] font-medium text-(--text-light) text-nowrap">
                  Total Projects
                </div>
              </div>
            </div>
          </div>
          <div className="px-9 pt-8 pb-7.5 font-normal text-[16px] text-(--text-light)">
            Centralized control over all projects for streamlined management.
          </div>

          <div className="flex pl-14 pb-10 gap-4 justify-between">
            <ul className="text-[14px] text-[#909090] space-y-2 mt-2">
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary)  rounded"
                />{" "}
                Completed Projects
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                On-Progress Projects
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                Overdue Projects
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                On-Hold Projects
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                On-Pending Projects
              </li>
            </ul>

            <div className="flex items-center justify-center ">
              <div className="relative ">
                <Circle maxValue={150} />
              </div>
            </div>
            <div className="text-[18px] pr-10 font-medium text-[#909090] cursor-pointer hover:text-(--primary) self-end">
              View All
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl  border border-[#EEF6FB] flex flex-col  ">
          <div className=" px-9 pt-10 pb-7.5 border-b border-[#43C8FF] ">
            <div className="flex flex-col  gap-3 ">
              <div className="w-15 h-15 rounded-full bg-[#E9F8FF] flex  items-center justify-center p-1">
                <TassksIcon />
              </div>
              <div className="flex items-center gap-7.5">
                <div className="text-[24px] font-medium text-(--text-light) text-nowrap">
                  Total Tasks
                </div>
              </div>
            </div>
          </div>
          <div className="px-9 pt-8 pb-7.5 font-normal text-[16px] text-(--text-light)">
            Centralized control over all projects for streamlined management.
          </div>

          <div className="flex pl-14 pb-10 gap-4  justify-between">
            <ul className="text-[14px] text-[#909090] space-y-2 mt-2">
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary)  rounded"
                />{" "}
                Pending Tasks
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                Completed Tasks
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                Overdue Tasks
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                In Progress
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4.75 h-4.75 appearance-none  border border-(--primary) rounded"
                />{" "}
                Priority Tasks
              </li>
            </ul>

            <div className="flex items-center justify-center ">
              <div className="relative ">
                <Circle maxValue={250} />
              </div>
            </div>
            <div className="text-[18px] pr-10 font-medium text-[#909090] self-end hover:text-(--primary) cursor-pointer">
              View All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
