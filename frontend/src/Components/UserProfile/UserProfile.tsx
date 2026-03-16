const UserProfile = () => {
  return (
    <div className='bg-white border-b border-[#E5E5E5] px-6 py-5 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='w-16 h-16 rounded-full bg-linear-to-br from-[#79A8D6] to-[#2F5F89] shrink-0 overflow-hidden flex items-center justify-center'>
          <svg width='40' height='40' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='24' cy='16' r='8' fill='white' />
            <path d='M10 38C10 30.268 16.268 24 24 24C31.732 24 38 30.268 38 38V40H10V38Z' fill='white' />
          </svg>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-[40px] leading-none font-semibold text-[#4A4A4A] tracking-[0.02em]'>Welcome Back, Mohan</h2>
          <p className='mt-1 text-[20px] leading-none font-medium text-[#F4A825]'>Super admin</p>
          <p className='mt-3 text-[31px] leading-none font-normal text-[#8A8A8A] tracking-[0.01em]'>
            You have{' '}
            <span className='text-[#0DB4E8] font-semibold'>21</span>
            {' '}Pending Approvals &{' '}
            <span className='text-[#0DB4E8] font-semibold'>14</span>
            {' '}Leave Requests
          </p>
        </div>
      </div>

      <div className='w-72.5 grid grid-cols-2 gap-3'>
        <button className='h-9.5 rounded-sm bg-[#86BF1F] text-white text-[16px] font-medium tracking-[0.03em] flex items-center justify-center gap-1.5'>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 5V19M5 12H19' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          Add Project
        </button>

        <button className='h-9.5 rounded-sm bg-[#06A9E6] text-white text-[16px] font-medium tracking-[0.03em] flex items-center justify-center gap-1.5'>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 5V19M5 12H19' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          Add Requests
        </button>

        <button className='col-span-2 h-9.5 rounded-sm border border-[#DDDDDD] text-[#5A5A5A] text-[16px] font-medium tracking-[0.02em] bg-white flex items-center justify-center gap-1.5'>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 5V19M5 12H19' stroke='#06A9E6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          Add New Employee
        </button>
      </div>
    </div>
  )
}

export default UserProfile
