import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-0 shadow-2xs'>  
      <div className='flex justify-between items-center m-3 p-2'>
        {/* Logo */}
        <div className='font-bold text-lg'>GitFinder</div>

        {/* Desktop Links (Hidden on mobile, shown on md screens and up) */}
        <div className='hidden md:flex flex-row gap-5 pr-5 items-center'>
          <div className='cursor-pointer hover:text-gray-500'>Theme</div>
          <div className='cursor-pointer hover:text-gray-500'>Profile</div>
        </div>

        {/* Mobile Hamburger Button (Shown on mobile, hidden on md screens and up) */}
        <div className='md:hidden pr-3'>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='focus:outline-none flex flex-col justify-between w-6 h-5'
          >
            <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='flex flex-col gap-3 px-5 pb-4 md:hidden border-t border-gray-100 pt-3'>
          <div className='cursor-pointer hover:text-gray-500'>Theme</div>
          <div className='cursor-pointer hover:text-gray-500'>Profile</div>
        </div>
      )}
    </div>
  )
}

export default Navbar