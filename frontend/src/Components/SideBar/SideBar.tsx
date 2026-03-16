import  { useState } from 'react'
import Logo from '../../assets/Vector.svg'
import OverviewCardsIcon from '../../assets/Group 679.svg?react'
import EmployeeDashBoardIcon from '../../assets/Group 1076.svg?react'
import  AttendanceSummaryIcon  from '../../assets/dashboard-browsing-stroke-rounded 1.svg?react'

import {

 
 
  AllRequestsIcon,
  ProjectTrackerIcon,
  ProductivityIcon,
  QuickActionIcon,
  PayrollIcon,
  WorksheetIcon,
} from './Icons'

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState('Overview Cards')

  const menuItems = [
    { name: 'Overview Cards', icon: OverviewCardsIcon },
    { name: 'Employee Dashboard', icon: EmployeeDashBoardIcon },
    { name: 'Attendance Summary', icon: AttendanceSummaryIcon },
    { name: 'All Requests', icon: AllRequestsIcon },
    { name: 'Project/Task Tracker', icon: ProjectTrackerIcon },
    { name: 'Productivity & Stats', icon: ProductivityIcon },
    { name: 'Quick Action Panel', icon: QuickActionIcon },
    { name: 'Payroll Management System', icon: PayrollIcon },
    { name: 'Worksheet', icon: WorksheetIcon },
  ]

  return (
    <div className='h-screen flex flex-col bg-white w-72 pl-4 border-r border-(--border)'>
      {/* Header */}
      <div className='flex gap-3 py-6 px-1.5 border-b border-(--border)'>
        <img src={Logo} alt="Logo" className='w-10 h-10' />
        <div className='text-[#00A0E3] font-bold text-lg leading-4 tracking-[8%] flex items-center gap-1'>
          <span>Ziya</span>
          <span>Attendance</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className='flex-1 py-6 '>
        <ul className='space-y-2 '>
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.name}>
                <button
                  onClick={() => setActiveMenu(item.name)}
                  className={`w-full flex items-center gap-4  py-3.5 rounded-lg transition-all duration-200 ${
                    activeMenu === item.name
                      ? 'bg-[#E3F4FF] text-[#00A0E3]'
                      : 'text-[#5A5A5A] hover:text-[#00A0E3]'
                  }`}
                >
                  
                    <IconComponent className={`${activeMenu===item.name?'text-[#00A0E3' :'text-red-600'}`}/>
                  
                  <span className='text-sm font-medium'>{item.name}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
