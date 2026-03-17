import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import UserProfile from '../../Components/UserProfile/UserProfile'
import EmployeeDetail from '../../Components/EmployeeDetail/EmployeeDetail'
import TaskDetail from '../../Components/TaskDetail/TaskDetail'

const DashBoard = () => {
  return (
    <div className='flex h-screen bg-[#F8F8F8]'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
        <NavBar />
        <div className='flex-1 overflow-auto px-9.25 py-6.75 bg-[#F6F5F4] flex flex-col gap-3.75'>
          <UserProfile />
          <EmployeeDetail/>
          <TaskDetail/>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
