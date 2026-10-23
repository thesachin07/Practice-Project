import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between gap-5 bg-pink-300 text-2xl m-5 p-2 '>
      <div className='text-red-800 font-bold '>ReactRouter</div>
      <div className='flex flex-row gap-4 text-black mr-5'>
        <div><Link to="/">Home </Link></div>
              <div> <Link to="/products">Products</Link></div> 
      </div>
      
      </div>
    </div>
  )
}

export default Navbar
