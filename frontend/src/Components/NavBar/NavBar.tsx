import { LayoutDashboard, Search } from "lucide-react"

const NavBar = () => {
  return (
    <div className='h-22 border-b border-[#E5E5E5] bg-white px-8 flex items-center justify-between'>
      {/* Left: Dashboard Label */}
      <div className='flex items-center gap-2.5'>
        <LayoutDashboard/>
        {/* <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='2' y='2' width='8' height='8' rx='2' stroke='#4A4A4A' strokeWidth='1.5'/>
          <rect x='14' y='2' width='8' height='8' rx='2' stroke='#4A4A4A' strokeWidth='1.5'/>
          <rect x='2' y='14' width='8' height='8' rx='2' stroke='#4A4A4A' strokeWidth='1.5'/>
          <rect x='14' y='14' width='8' height='8' rx='2' stroke='#4A4A4A' strokeWidth='1.5'/>
        </svg> */}
        <span className='text-2xl font-medium text-[#4A4A4A] tracking-wide'>Dashboard</span>
      </div>

      {/* Center: Search Bar */}
      <div className='flex-1 mx-12 max-w-md'>
        <div className='h-11 rounded-lg border border-[#D0D0D0] bg-white px-3.5 flex items-center gap-2.5'>
          <Search/>
          <input
            type='text'
            placeholder='Search here'
            className='flex-1 bg-transparent text-sm text-[#333333] placeholder-[#888888] outline-none font-normal'
          />
        </div>
      </div>

      {/* Right: Search Button */}
      <button className='h-11 px-5 rounded-lg border border-[#C8C8C8] bg-[#E8E8E8] text-sm font-medium text-[#555555] hover:bg-[#DCDCDC] transition-colors'>
        Search
      </button>
    </div>
  )
}

export default NavBar
