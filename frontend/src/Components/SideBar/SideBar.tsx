import  { useState } from 'react'
import Logo from '../../assets/Vector.svg'
import OverviewCardsIcon from '../../assets/overviewcardicon.svg?react'
import EmployeeDashBoardIcon from '../../assets/Group 1076.svg?react'
import AttendanceSummaryIcon from '../../assets/dashboard-browsing-stroke-rounded 1.svg?react'
import  ReguestIcon  from '../../assets/allrequest.svg?react'
import  ProjectIcon  from '../../assets/taskTracker.svg?react'
import  ProductivityIcon  from '../../assets/productivity.svg?react'
import  QuickIcon  from '../../assets/quickaction.svg?react'
import  PayIcon  from '../../assets/payrol.svg?react'
import  WorkIcon  from '../../assets/work.svg?react'





const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState('Overview Cards')

  const menuItems = [
    { name: 'Overview Cards', icon: OverviewCardsIcon },
    { name: 'Employee Dashboard', icon: EmployeeDashBoardIcon },
    { name: 'Attendance Summary', icon: AttendanceSummaryIcon },
    { name: 'All Requests', icon: ReguestIcon },
    { name: 'Project/Task Tracker', icon: ProjectIcon },
    { name: 'Productivity & Stats', icon: ProductivityIcon },
    { name: 'Quick Action Panel', icon: QuickIcon },
    { name: 'Payroll Management System', icon: PayIcon },
    { name: 'Worksheet', icon: WorkIcon},
    
    
  ]

  return (
    <div className='h-screen flex flex-col bg-white  pl-3 border-r border-(--border)'>
      {/* Header */}
      <div className='h-20.5 flex gap-3 py-6 px-1.5 border-b-2 border-(--border) '>
        <img src={Logo} alt="Logo" className='w-10 h-10' />
        <div className='text-[#00A0E3] font-bold text-lg leading-4 tracking-[8%] flex items-center gap-1'>
          <span>Ziya</span>
          <span>Attendance</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className='flex-1 py-6.75 pr-4 '>
        <ul className='space-y-2 '>
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.name}>
                <button
                  onClick={() => setActiveMenu(item.name)}
                  className={`w-full flex items-center  gap-2 pl-2 py-3.5 rounded-lg transition-all duration-200 ${
                    activeMenu === item.name
                      ? 'bg-[#E3F4FF] text-[#00A0E3]'
                      : 'text-[#5A5A5A] hover:text-[#00A0E3]'
                  }`}
                >
                  
                    <IconComponent className={`${activeMenu===item.name?'text-[#00A0E3' :'text-red-600'} flex items-center justify-center`}/>
                  
                  <span className='text-[16px] font-medium text-nowrap'>{item.name}</span>
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
